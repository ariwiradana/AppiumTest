## 1. Cek Appium
Ngecek kalo udh keinstall appium & gak ada yg error (warna merah)
```bash
appium doctor
```
## 2. Run Appium
Command buat ngerun appium
```bash
appium
```
>**Note**: Kalo udh kerun ada muncul Available drivers: - uiautomator2@2.29.5 (automationName 'UiAutomator2'). Kalo belum ada drivers uiautomator nya lanjut step 3 kalo gak skip lanjut part 4
## 3. Install the UiAutomator2 Driver
Command buat install uiautomator
```bash
appium driver install uiautomator2
#habis itu tutup terminalnya ini
```
## 4. Install package project react native
Pastikan terminalnya udh di directory AppiumTest, Install package2 nya, caranya
```bash
yarn install
```
## 5. Run emulator nya lewat Android Studio
## 6. Run project react native nya ini
```bash
yarn android
```
>**Note**: Kalo udh kerun dan aman berti oke mantap
## 7. Buka terminal baru di VSCode
Caranya yg gambar kotak ke split di kanan bawah trus run
```bash
cd appium
yarn install
```
## 8. Re-Run appium server
```bash
appium
```
## 9. Buka AndroidManifest.xml
buka folder android > app > src > main > AndroidManifest.xml
>**Note**: di tag "manifest" pastikan ada package="com.namaapp" kalo disini contohnya "com.appiumtest"
>**Note**: itu dipakai di file test.js bagian const capabilities yang app:appPackage
## 10. Buka test.js di folder appium
di folder appium > test.js
>**Note**: disitu kan ada driver.$(selectorById('firstName')) itu berti nge get id yg di file react native dengan id "firstName" (di file App.jsx), kalo di file react native nya di set di testID="firstName"
## 11. Run automation test
di terminal directory appium
```bash
node test.js
```
>**Note**: pastikan emulatornya udh kebukak
>**Note**: kalo udh auto dia ngetik2 dan klik button berti berhasil
