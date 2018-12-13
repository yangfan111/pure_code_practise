using System.Collections;
using System.Collections.Generic;
public partial class YFLib
{
  
   
    #region //code uses---------------------------------------------------------------------------
    ///按名字获取短位ID方法
    public static uint GenShortUintIdByName(string inName)
    {
        return ShortIDGenerator.Compute(typeName);
    }
    ///反射获取全局类型索引值 [类名/类名截取->短id计算] ---> 类名
    public static Dictionary<uint, string> GetAllDerivedTypes(System.Type T)
    {
        var derivedTypes = new Dictionary<uint, string>();

        var baseType = T;//typeof(AudioTriggerBase);

#if UNITY_WSA && !UNITY_EDITOR
		var baseTypeInfo = System.Reflection.IntrospectionExtensions.GetTypeInfo(baseType);
		var typeInfos = baseTypeInfo.Assembly.DefinedTypes;

		foreach (var typeInfo in typeInfos)
		{
			if (typeInfo.IsClass && (typeInfo.IsSubclassOf(baseType) || baseTypeInfo.IsAssignableFrom(typeInfo) && baseType != typeInfo.AsType()))
			{
				var typeName = typeInfo.Name;
				derivedTypes.Add(AkUtilities.ShortIDGenerator.Compute(typeName), typeName);
			}
		}
#else
        var types = baseType.Assembly.GetTypes();

        for (var i = 0; i < types.Length; i++)
        {
            if (types[i].IsClass &&
                (types[i].IsSubclassOf(baseType) || baseType.IsAssignableFrom(types[i]) && baseType != types[i]))
            {
                var typeName = types[i].Name;
                var typeSplits = typeName.Split('_');
                string computedSplit = typeSplits.Length == 2 ? typeSplits[1] : typeSplits[0];
                derivedTypes.Add(GenShortUintIdByName(typeName), typeName);
            }
        }
#endif

        //Add the Awake, Start and Destroy triggers and build the displayed list.
        //derivedTypes.Add(AkUtilities.ShortIDGenerator.Compute("Awake"), "Awake");
        //derivedTypes.Add(AkUtilities.ShortIDGenerator.Compute("Start"), "Start");
        //derivedTypes.Add(AkUtilities.ShortIDGenerator.Compute("Destroy"), "Destroy");

        return derivedTypes;
    }
    #endregion
}
