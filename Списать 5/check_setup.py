print("=== ПРОВЕРКА СИСТЕМЫ ===")
print("1. Проверка Python...")

import sys
print(f"    Версия Python: {sys.version}")

print("2. Проверка установленных пакетов...")
try:
    import selenium
    print(" ✅ Selenium установлен")
except ImportError:
    print(" ❌ Selenium НЕ установлен")

print("3. проверка Chrome...")
import os
chrome_paths = [
    "c:\Program Files\Google\Chrome\Application\chrome.exe",
    "c:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
]

chrome_found  = any(os.path.exists(path) for path in chrome_paths)
if chrome_found:
    print(" ✅ Chrome установлен")
else:
    print(" ❌ Chrome НЕ установлен")

print("\n=== РЕЗУЛЬТАТ ПРОВЕРКИ ===")
if chrome_found:
    print(" ✅ система готова к работе!")
else:
    print("❌ установите Chrome браузер")

input("\nPress Enter for exit...")