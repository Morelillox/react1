

const productos = [
    { id: 1,foto: "https://i.ibb.co/D7BJYRW/alfajos-coco.jpg" , name: "Alfajor de Coco", price: "$60" , stock:250},
    { id: 2,foto: "https://i.ibb.co/zSCGRD6/budin-frutosr.jpg" , name: "Budin Frutos Rojos", price: "$120" , stock:100},
    { id: 3,foto: "https://i.ibb.co/4Yqj2ZV/lemon-pie.jpg" , name: "Lemond Pie", price: "$150" , stock:60},
    { id: 4,foto: "https://i.ibb.co/XtKV6jB/mini-tortas.jpg" , name: "Mini Tortas", price: "$100" , stock:200},
    { id: 5,foto: "https://i.ibb.co/pzSmhtx/torta2.jpg" , name: "Torta Woow", price: "$1000" , stock:5},
    { id: 6,foto: "https://i.ibb.co/p2F1BNy/torta-Cumpleanos.jpg" , name: "Torta Cumpleaños", price: "$1250" , stock:20},
    { id: 7,foto: "https://i.ibb.co/pyYbhDV/tortita-choco.jpg" , name: "Mini torta Choco", price: "$150" , stock:55 },
  ];

  //Promise((res, rej)=>{})
//resuelto funcion cunado esta todo bien
//rechazado funcion cunado esta todo mal

 export const getFetch = new Promise((resolve, reject)=>{
    // tareas asincronicas acciones
    setTimeout(()=>{
        resolve(productos)
    }, 3000)
    //reject('400 not found')
})