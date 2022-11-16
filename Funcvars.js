// function showMassage(from, text){  // Bu qatordagi qavs ichidagi: 'from, text' bular parametr hisoblandi 
//     from = 'Bu qiz ' + from + ' gapirdi: '
//     console.log(from + text);
// }

// let from = 'Anna' // 'Anna' fromga berilgan qiymat va endi u argument bola oladi.

// showMassage(from, "Privet") // Bu qatordagi qavs ichidagi: 'from, "Privet" bular functionga berilgan argument hisoblanadi.

// console.log(from);

// function showMassage(from, text = 'tekst berilmagan'){  // Parametrga argumentni boshida berish
//     from = 'Bu qiz ' + from + ' gapirdi: '
//     console.log(from + text);
// }
// let from = "Anna"
// showMassage(from)

// function showMassage(from, text){
//     if(text === undefined){  // Bu function agar textga argument berilmasa yani undefined bo'lsa unda quyidagi "gapirmadi" berilsin dedik
//         text = "Gapirmadi"
//     }
//     console.log(from + ' : ' + text);
// }
// let from = 'Anna'
// showMassage(from)
// function showMassage(from, text){
       
//     text = text || "Gapirmadi" //  Bu ikkinchi ko'rinishi 
   
//     console.log(from + ' : ' + text);
// }

// let from = 'Anna'
// showMassage(from)

// function showMassage(count){   // Bu qatorda parametr null yoki undefined bo'lsa ya'ni qiymat berilmasa ?? belgisi orqani "son berilmagan so'zini chiqardik"
//     console.log(count ?? 'son berilmgan');
// }
// showMassage(1)
// showMassage(0)
// showMassage(null)
// showMassage()

