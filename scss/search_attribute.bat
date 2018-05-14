@echo off

cd C:\inetpub\wwwroot\saried\scss
set /p id="Enter attribute: "

findstr /n /i /c:%id% *

pause