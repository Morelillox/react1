const items = [
    { 	id: 1,
		tipo:"Alfajor" ,
		foto: "https://i.ibb.co/D7BJYRW/alfajos-coco.jpg" , 
		name: "Alfajor de Coco", 
		price: "$60" , 
		stock:250, 
		detalle: "Alfajor de coco, relleno de dulce de leche con escencia de vainilla .. Super Dulce"
	},

    { 	id: 2,
		tipo:"Budin",
		foto: "https://i.ibb.co/zSCGRD6/budin-frutosr.jpg" , 
		name: "Budin Frutos Rojos", 
		price: "$120" , 
		stock:100, 
		detalle: "Budin con notas dulces de fresa, frambuesa, mora y frutilla"
	},

    { 	id: 3,
		tipo:"Torta",
		foto: "https://i.ibb.co/4Yqj2ZV/lemon-pie.jpg" , 
		name: "Lemond Pie", 
		price: "$150" , 
		stock:60, 
		detalle: "El ideal para los amantes del Limon, toda el amor de mil budines + limon ... ¿Que puede fallar?"
	},

    { 	id: 4,
		tipo:"Torta",
		foto: "https://i.ibb.co/XtKV6jB/mini-tortas.jpg" , 
		name: "Mini Tortas", price: "$100" , stock:200, 
		detalle: "Cuando una torta es mucho, Mil budines te inventa una mini torta.. El mismo amor, la misma pasion .. pero mini"
	},

    { 	id: 5,
		tipo:"Torta",
		foto: "https://i.ibb.co/pzSmhtx/torta2.jpg" , 
		name: "Torta Woow", 
		price: "$1000" , 
		stock:5, 
		detalle: "La torta perfecta si existe, es esta !."
	},

    { 	id: 6,
		tipo:"Torta",
		foto: "https://i.ibb.co/p2F1BNy/torta-Cumpleanos.jpg" , 
		name: "Torta Cumpleaños", 
		price: "$1250" , 
		stock:20, 
		detalle: "Si el cumpleaños estuvo de mas, imaginate la torta."
	},

    { 	id: 7,
		tipo:"Torta",
		foto: "https://i.ibb.co/pyYbhDV/tortita-choco.jpg" , 
		name: "Mini torta Choco", 
		price: "$150" , 
		stock:55 , 
		detalle: "Torta para compartir una tarde de lluvia con un buen cafe."
	},
	
  ];

export const getItem = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(items);
	}, 2000);
});

