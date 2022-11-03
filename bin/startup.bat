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

start "Integration Server" cmd /c "%~dp0server.bat" %*
