name: Add SECURITY.md if missing

on:
  push:
    branches:
      - main

jobs:
  check-security-file:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Check for SECURITY.md and add if missing
        run: |
          mkdir -p .github
          if [ ! -f .github/SECURITY.md ]; then
            echo "# Política de Seguridad\n\nPor favor, reporta vulnerabilidades a security@example.com." > .github/SECURITY.md
            git config --global user.email "github-actions[bot]@users.noreply.github.com"
            git config --global user.name "github-actions[bot]"
            git add .github/SECURITY.md
            git commit -m "Agrega SECURITY.md automáticamente"
            git push
          fi
