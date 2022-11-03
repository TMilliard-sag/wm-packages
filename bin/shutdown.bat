@echo off

rem #######################################################################################
rem 
rem # This file can only be used to stop Integration Server running under common platform.
rem  
rem #######################################################################################

rem ##############################################################################
rem # Note: The startup.bat/sh, shutdown.bat/sh, server.bat/sh scripts contained #
rem # in the Integration Server_directory\instances\instance_name\bin directory  #
rem # are deprecated. Software AG recommends the use of the scripts contained in #
rem # the Software AG_directory\profiles\IS_instance_name\bin directory.         # 
rem ##############################################################################

setlocal

SET IS_DIR=%~dp0..

call "%IS_DIR%\bin\setenv_instance.bat"

SET IS_COMMON_DIR=%IS_DIR%\..\..\

SET PROFILES_DIR=%IS_COMMON_DIR%\..\profiles\IS_%INSTANCE_NAME%

call "%PROFILES_DIR%\bin\shutdown.bat"

endlocal
