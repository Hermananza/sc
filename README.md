# MarLing

# List Protocol yang support
- VLess
- VMess
- Trojan

# Yang harus dipersiapkan
- VPS dengan minimal spek 1 Core 1 GB ram
- Domain yang sudah di pointing ke CloudFlare
- Pemahaman dasar perintah Linux

# Sistem VM yang dapat digunakan
- Debian 11 [**RECOMMENDED**] </br>
- Ubuntu 20.04 </br>

# Instalasi
  ```html
 apt-get update && apt-get upgrade -y && apt dist-upgrade -y && update-grub && reboot
 ```
Pastikan anda sudah login sebagai root sebelum menjalankan perintah dibawah
 ```html
 wget https://raw.githubusercontent.com/Hermananza/sc/main/mar.sh && chmod +x mar.sh && ./mar.sh
 ```

Buka panel Marzban dengan mengunjungi https://domainmu/dashboard <br>

Jika ingin mengubah konfigurasi env variable 
```html
nano /opt/marzban/.env
 ```
Perintah Restart service Marzban 
```html
marzban restart
 ```
Perintah Cek Logs service Marzban 
```html
marzban logs
 ```
Perintah Cek update service Marzban
```html
marzban update
 ```

# Cloudflare Sett

Pastikan SSL/TLS Setting pada cloudflare sudah di set menjadi full
![image](https://github.com/Hermananza/sc/assets/97426017/3aeedf09-308e-41b0-9640-50e4abb77aa0) </br>

Lalu pada tab **Network** pastikan gRPC dan WebSocket sudah ON 
![image](https://github.com/Hermananza/sc/assets/97426017/65d9b413-fda4-478a-99a5-b33d8e5fec3d)



# Setting Host Marzban
 
 Saat masuk ke panel, setting host di menu kanan atas <br>
 ![image](https://github.com/Hermananza/sc/assets/97426017/6b96bce7-39c7-4b5c-b01e-8dfdea91cb47) </br>

Lalu ubah variabel {SERVER_IP} dibawah menjadi domain yang sudah di pointing tadi <br>
# CONTOH
![image](https://github.com/Hermananza/sc/assets/97426017/191a485c-07a7-4a28-88d3-b66fa403abc7)
</br>

![image](https://github.com/Hermananza/sc/assets/97426017/096f46ba-ed4d-47c8-a887-f3f3acd595d5)

Terima kasih orang baik! 🙏 

</br>
