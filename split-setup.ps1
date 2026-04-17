$source = Get-Content -Raw "setup.txt"
$pattern = '(?ms)^--- FILE: (.+?) ---\r?\n(.*?)(?=^--- FILE: |\Z)'
[regex]::Matches($source, $pattern) | ForEach-Object {
    $path = $_.Groups[1].Value.Trim()
    $content = $_.Groups[2].Value
    $dir = Split-Path $path -Parent
    if ($dir) {
        New-Item -ItemType Directory -Force -Path $dir | Out-Null
    }
    [System.IO.File]::WriteAllText((Join-Path (Get-Location) $path), $content, [System.Text.UTF8Encoding]::new($false))
    Write-Host "Wrote $path"
}
