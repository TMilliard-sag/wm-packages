@echo off
rem ------------------------------------------------------
rem -- Install webMethods Integration Server as NT Service
rem ------------------------------------------------------
rem

rem #################################################################################
rem # Note: The installSvc.bat script contained in the                              #
rem # Integration Server_directory\instances\instance_name\support\win32 directory  #
rem # is deprecated. Software AG recommends the use of the service.bat script       #
rem # contained in the Software AG_directory\profiles\IS_instance_name\bin          #
rem # directory.                                                                    # 
rem #################################################################################

SET IS_DIR=%~dp0..\..\

call "%IS_DIR%\bin\setenv_instance.bat"
call "%IS_COMMON_DIR%\..\profiles\IS_%INSTANCE_NAME%\bin\setenv.bat"

SET IS_COMMON_DIR=%IS_DIR%\..\..\

SET WRAPPER_CONF="%IS_COMMON_DIR%\..\profiles\IS_%INSTANCE_NAME%\configuration\wrapper.conf"

SET option=%1
if not defined option goto reg
if %option%==unreg goto unreg
if %option%==update goto update

:reg
echo Installing
%WRAPPER% -i %WRAPPER_CONF%
goto end

:unreg
echo Un-installing
%WRAPPER% -r %WRAPPER_CONF%
goto end

:update
echo Updating service configuration Not supported.
goto end

:end
