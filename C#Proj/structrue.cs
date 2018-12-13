	public class ShortIDGenerator
	{
		private const uint s_prime32 = 16777619;
		private const uint s_offsetBasis32 = 2166136261;

		private static byte s_hashSize;
		private static uint s_mask;

		static ShortIDGenerator()
		{
			HashSize = 32;
		}

		public static byte HashSize
		{
			get { return s_hashSize; }

			set
			{
				s_hashSize = value;
				s_mask = (uint) ((1 << s_hashSize) - 1);
			}
		}

		public static uint Compute(string in_name)
		{
			var buffer = System.Text.Encoding.UTF8.GetBytes(in_name.ToLower());

			// Start with the basis value
			var hval = s_offsetBasis32;

			for (var i = 0; i < buffer.Length; i++)
			{
				// multiply by the 32 bit FNV magic prime mod 2^32
				hval *= s_prime32;

				// xor the bottom with the current octet
				hval ^= buffer[i];
			}

			if (s_hashSize == 32)
				return hval;

			// XOR-Fold to the required number of bits
			return (hval >> s_hashSize) ^ (hval & s_mask);
		}
	}
    [System.Serializable]
public class WwiseSettings
{
	public const string WwiseSettingsFilename = "WwiseSettings.xml";

	private static WwiseSettings s_Instance;
	public bool CopySoundBanksAsPreBuildStep = true;
	public bool CreatedPicker = false;
	public bool CreateWwiseGlobal = true;
	public bool CreateWwiseListener = true;
	public bool GenerateSoundBanksAsPreBuildStep = false;
	public bool ShowMissingRigidBodyWarning = true;
	public string SoundbankPath;
	public string WwiseInstallationPathMac;
	public string WwiseInstallationPathWindows;
	public string WwiseProjectPath;

	// Save the WwiseSettings structure to a serialized XML file
	public static void SaveSettings(WwiseSettings Settings)
	{
		try
		{
			var xmlDoc = new System.Xml.XmlDocument();
			var xmlSerializer = new System.Xml.Serialization.XmlSerializer(Settings.GetType());
			using (var xmlStream = new System.IO.MemoryStream())
			{
				var streamWriter = new System.IO.StreamWriter(xmlStream, System.Text.Encoding.UTF8);
				xmlSerializer.Serialize(streamWriter, Settings);
				xmlStream.Position = 0;
				xmlDoc.Load(xmlStream);
				xmlDoc.Save(System.IO.Path.Combine(UnityEngine.Application.dataPath, WwiseSettingsFilename));
			}
		}
		catch (System.Exception)
		{
		}
	}

	// Load the WwiseSettings structure from a serialized XML file
	public static WwiseSettings LoadSettings(bool ForceLoad = false)
	{
		if (s_Instance != null && !ForceLoad)
			return s_Instance;

		var Settings = new WwiseSettings();
		try
		{
			if (System.IO.File.Exists(System.IO.Path.Combine(UnityEngine.Application.dataPath, WwiseSettingsFilename)))
			{
				var xmlSerializer = new System.Xml.Serialization.XmlSerializer(Settings.GetType());
				var xmlFileStream = new System.IO.FileStream(UnityEngine.Application.dataPath + "/" + WwiseSettingsFilename,
					System.IO.FileMode.Open, System.IO.FileAccess.Read);
				Settings = (WwiseSettings) xmlSerializer.Deserialize(xmlFileStream);
				xmlFileStream.Close();
			}
			else
			{
				var projectDir = System.IO.Path.GetDirectoryName(UnityEngine.Application.dataPath);
				var foundWwiseProjects = System.IO.Directory.GetFiles(projectDir, "*.wproj", System.IO.SearchOption.AllDirectories);

				if (foundWwiseProjects.Length == 0)
					Settings.WwiseProjectPath = "";
				else
				{
					Settings.WwiseProjectPath =
						AkUtilities.MakeRelativePath(UnityEngine.Application.dataPath, foundWwiseProjects[0]);
				}

				Settings.SoundbankPath = AkSoundEngineController.s_DefaultBasePath;
			}

			s_Instance = Settings;
		}
		catch (System.Exception)
		{
		}

		return Settings;
	}
}