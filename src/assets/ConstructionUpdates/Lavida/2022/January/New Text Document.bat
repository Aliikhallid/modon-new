@echo off
setlocal enabledelayedexpansion
set count=0
for %%f in (*.webp) do (
  ren "%%f" "!count!.webp"
  set /a count+=1
)