using System.Collections;
using System.Collections.Generic;
public partial class YFLib
{
  
    #region //file methods---------------------------------------------------------------------------
    //获取文件绝对路径
    public static string GetFullPath(string BasePath, string RelativePath)
    {
        string tmpString;
        if (string.IsNullOrEmpty(BasePath))
            return "";

        var wrongSeparatorChar = System.IO.Path.DirectorySeparatorChar == '/' ? '\\' : '/';

        if (string.IsNullOrEmpty(RelativePath))
            return BasePath.Replace(wrongSeparatorChar, System.IO.Path.DirectorySeparatorChar);

        if (System.IO.Path.GetPathRoot(RelativePath) != "")
            return RelativePath.Replace(wrongSeparatorChar, System.IO.Path.DirectorySeparatorChar);

        tmpString = System.IO.Path.Combine(BasePath, RelativePath);
        tmpString = System.IO.Path.GetFullPath(new System.Uri(tmpString).LocalPath);

        return tmpString.Replace(wrongSeparatorChar, System.IO.Path.DirectorySeparatorChar);
    }
    //copy文件夹
    public static bool DirectoryCopy(string sourceDirName, string destDirName, bool copySubDirs)
    {
        // Get the subdirectories for the specified directory.
        var dir = new System.IO.DirectoryInfo(sourceDirName);

        if (!dir.Exists)
        {
            UnityEngine.Debug.LogError("WwiseUnity: Source directory doesn't exist");
            return false;
        }

        var dirs = dir.GetDirectories();

        // If the destination directory doesn't exist, create it. 
        if (!System.IO.Directory.Exists(destDirName))
            System.IO.Directory.CreateDirectory(destDirName);

        // Get the files in the directory and copy them to the new location.
        var files = dir.GetFiles();
        foreach (var file in files)
        {
            var temppath = System.IO.Path.Combine(destDirName, file.Name);
            file.CopyTo(temppath, true);
        }

        // If copying subdirectories, copy them and their contents to new location. 
        if (copySubDirs)
        {
            foreach (var subdir in dirs)
            {
                var temppath = System.IO.Path.Combine(destDirName, subdir.Name);
                DirectoryCopy(subdir.FullName, temppath, copySubDirs);
            }
        }

        return true;
    }
    ///获取相对路径
	public static string MakeRelativePath(string fromPath, string toPath)
    {
        // MONO BUG: https://github.com/mono/mono/pull/471
        // In the editor, Application.dataPath returns <Project Folder>/Assets. There is a bug in
        // mono for method Uri.GetRelativeUri where if the path ends in a folder, it will
        // ignore the last part of the path. Thus, we need to add fake depth to get the "real"
        // relative path.
        fromPath += "/fake_depth";
        try
        {
            if (string.IsNullOrEmpty(fromPath))
                return toPath;

            if (string.IsNullOrEmpty(toPath))
                return "";

            var fromUri = new System.Uri(fromPath);
            var toUri = new System.Uri(toPath);

            if (fromUri.Scheme != toUri.Scheme)
                return toPath;

            var relativeUri = fromUri.MakeRelativeUri(toUri);
            var relativePath = System.Uri.UnescapeDataString(relativeUri.ToString());

            return relativePath;
        }
        catch
        {
            return toPath;
        }
    }
    #endregion
  
}
