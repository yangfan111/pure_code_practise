<?php
$path_parts = pathinfo('/www/htdocs/inc/lib/');

//echo $path_parts['dirname'], "\n";


   // echo $path_parts['filename'], "\n"; // since PHP 5.2.0

   $dirpath = '/www/htdocs/inc/lib/aaa/';
   $dirpath = str_replace(array('/', '\\', '//', '\\\\'), DIRECTORY_SEPARATOR, $dirpath);
  // print_r($dirpath."\n");
  //此函数包含需要分割的字符如\aaa
  $tstr= strrchr($dirpath, DIRECTORY_SEPARATOR);
  if($tstr==''||$tstr==DIRECTORY_SEPARATOR)
  {
  //  print_r($dirpath);
  }
  else{
    $dirpath = str_replace(strrchr($dirpath, DIRECTORY_SEPARATOR), "", $dirpath) . DIRECTORY_SEPARATOR;
  }
//  print_r($tstr);
  

   print_r($dirpath);
   
  // $p0 = pathinfo($dirpath)['dirname'];
  // $dirpath = str_replace(strrchr($dirpath, DIRECTORY_SEPARATOR), "", $dirpath) . DIRECTORY_SEPARATOR;
//    print_r($p0);

?>