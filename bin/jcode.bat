@echo off

SET IS_DIR=%~dp0..
SET IS_COMMON_DIR=%~dp0..\..\..

SET CLASSPATHVAR=%IS_COMMON_DIR%\lib\wm-isserver.jar;%IS_COMMON_DIR%\lib\jars\*

call "%IS_COMMON_DIR%\bin\setenv.bat"

SET PATH=%PATH%;%JAVA_DIR%\..\bin;

for /D %%D in (%IS_DIR%\packages\*) do call :addPackagestaticjars %%D

"%JAVA_DIR%\bin\java" -classpath %CLASSPATHVAR%;%IS_COMMON_DIR%\..\common\lib\glassfish\gf.jakarta.mail.jar;%IS_COMMON_DIR%\..\common\lib\glassfish\gf.jaxb-api.jar;%IS_COMMON_DIR%\..\common\lib\glassfish\gf.webservices-api-osgi.jar;%IS_COMMON_DIR%\..\common\lib\wm-g11nutils.jar;%IS_COMMON_DIR%\..\common\lib\wm-isclient.jar;%IS_COMMON_DIR%\..\common\lib\wm-scg-audit.jar;%IS_COMMON_DIR%\..\common\lib\wm-scg-core.jar;%IS_COMMON_DIR%\..\common\lib\ext\*;%IS_DIR%\lib\jars\custom\*;%IS_COMMON_DIR%\lib\jars\custom\* com.wm.app.b2b.server.NodeUtil "%IS_DIR%" %1 %2 %3 %4 %5
goto :end

:addPackagestaticjars
if not exist %1\code\jars\static goto :end
call :addjarstoclasspath %1\code\jars\static
goto :end

:addjarstoclasspath
SET CLASSPATHVAR=%CLASSPATHVAR%;%1\*
goto :end

:end
exit /b %ERRORLEVEL%