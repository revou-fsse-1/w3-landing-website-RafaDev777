# Assignment 4 - Website Gallery Page

This website was made to complete the 4th assignment in 1st milestone in revou academy

## Developement Process Note

### animated scroll body parallax

https://codepen.io/scottkellum/pen/WWeXab
parallax yang di buat berdasarkan scrollY sehingga css animation bergerak berdasarkan value 0 - 1 dimana 1 adalah posisi paling bawah dari body ( dapat di ubah sesuai kebutuhan). animasi parallax ini baik di lakukan untuk objek yang akan di animasikan sepanjang page tersebut. untuk membedakan animasi di setiap section dapat di atur dengan persentase pada CSS animation dengan mengukur jumlah section yang ada dimana tinggi dari section di atur dengan memberikan ukuran 100vh. sehingga apabila terdapat 5 section, pengaturan animasi dapat dilakukan dengan memberikan jeda 20% di setiap sectionnya.

### animated scroll section specific

https://codepen.io/ibrahima92/pen/ExYZPqg
untuk animasi jenis ini dimana animasi spesifik hanya terjadi dalam 1 section animasi dapat dilakukan dengan cara mengimbuhkan style transform melalui java script dan memberikan value yang terkalkulasi yang dapat di baca oleh CSS.

### scroll tiggered animation

https://css-tricks.com/scroll-triggered-animation-vanilla-javascript/
mirip dengan parallax namun pada animasi ini trigger dilakukan apa bila page sampai pada id section tertentu. trick pada animasi ini adalah dengan menambahkan kelas active pada section tersebut dan memberikan selector #idsection.active. pada css. untuk penerapan beberapa item sekaligus dapat di lakukan dengan memberikan animation delay yang variatif untuk tiap objek.

### mouse move parallax

https://codepen.io/oscicen/pen/zyJeJw
mirip dengan body parallax namun menggunakan posisi mouse dan mengimbuhkannya kepada background position
