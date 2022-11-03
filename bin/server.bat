@echo off

rem #############################################################################
rem 
rem # This file can only be used to run Integration Server under common platform.
rem  
rem #############################################################################

rem ##############################################################################
rem # Note: The startup.bat/sh, shutdown.bat/sh, server.bat/sh scripts contained #
rem # in the Integration Server_directory\instances\instance_name\bin directory  #
rem # are deprecated. Software AG recommends the use of the scripts contained in #
rem # the Software AG_directory\profiles\IS_instance_name\bin directory.         # 
rem ##############################################################################

setlocal

SET IS_DIR=%~dp0..

SET IS_COMMON_DIR=%IS_DIR%\..\..\

call "%IS_DIR%\bin\setenv_instance.bat"

SET PROFILES_DIR=%IS_COMMON_DIR%\..\profiles\IS_%INSTANCE_NAME%

SET DO_NOT_CHECK_FOR_DUPLICATE_INSTANCE_WITH_TITLE=true

call "%PROFILES_DIR%\bin\startup.bat" %1 %2 %3 %4 %5 %6 %7 %8 %9

endlocal
