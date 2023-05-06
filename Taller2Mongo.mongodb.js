/* 
Utilizando la base datos de sample_restaurants, construir un tablero que nos permita mostrar:
¿Cuántos restaurantes hay en total?

¿Cuál es el distrito que cuenta con el mayor número de restaurantes?

¿Cuántos restaurantes hay por cada tipo de cocina?

¿Cuántos restaurantes hay por cada código postal?

*/
// 1. Usando la colección listingsAndReviews de sample_airbnb, 
// encuentre mediante el uso de agregaciones, cuál es la propiedad con mayor número de servicios ("amenities") de la colección.
// use('sample_airbnb')
// db.listingsAndReviews.aggregate([
//     {
//       $project: { // Se encarga de proyectar solo los campos que necesito para la agregacion (Que seria el name)
//         name: 1,
//         amenitiesCount: { $size: "$amenities" } // Se agrega este nuevo campo el cual es el tamaño del array de amenities
//       }
//     },
//     {
//       $sort: { amenitiesCount: -1 } //Ordeno los campos de forma descendente
//     },
//     {
//       $limit: 1 // Limito a que me traiga un solo resultado el cual sera el que tenga mas amenities
//     }
//   ])
  
// 2. Usando la colección listingsAndReviews de sample_airbnb, encuentre mediante el 
// uso de agregaciones, el número de propiedades que tienen conexión a Internet, sea desde Wifi o desde cable (Ethernet).
// Nota. Revise el campo amenities (“servicios”)
// use('sample_airbnb')
// db.listingsAndReviews.aggregate([
//     {
//         $match: {
//           amenities: {
//             $in: ["Internet","Wifi","Ethernet connection"]
//         }
//     }
//     },
//     {
//         $count: "Total"
//     }
// ])

// 3. Usando la colección listingsAndReviews de sample_airbnb, encuentre mediante el uso de agregaciones, 
// todas las propiedades que hayan recibido 50 o más comentarios, que la valoración ("review_score_rating") 
// sea mayor o igual a 80, que cuenten con conexión a Internet vía cable y que estén ubicadas en Brazil.
// use('sample_airbnb')
// db.listingsAndReviews.aggregate([
//     {
//         $match: {
//           "address.country": "Brazil",
//           "amenities": {$all: ["Ethernet connection"]}, 
//           "review_scores.review_scores_rating" : {$gte: 80},
//           "number_of_reviews" : {$gte: 50},
          
//         }
//     },
//     {
//         $project: {
//             name: 1,
//             address: 1,
//             review_scores: 1,
//             amenities: 1,
//             number_of_reviews: 1,
//         }
//     }
// ])

// 4. Usando la colección listingsAndReviews de sample_airbnb, muestre el costo promedio de 
// una habitación en cada país para las propiedades de tipo casa.
// use('sample_airbnb')
// db.listingsAndReviews.aggregate([
//     {
//       $match: {
//         property_type: "House"
//       }
//     },
//     {
//       $group: {
//         _id: "$address.country",
//         CostoProm: { $avg: "$price" }
//       }
//     },
//     {
//       $project: {
//         _id: 0,
//         country: "$_id",
//         CostoProm: 1
//       }
//     }
//   ])
  
// 5. Utilizando la base datos de sample_restaurants, construir un tablero que nos permita mostrar:

// ¿Cuántos restaurantes hay en total?
// use('sample_restaurants')
// db.restaurants.count()

// ¿Cuál es el distrito que cuenta con el mayor número de restaurantes?
// use('sample_restaurants')
// db.restaurants.aggregate([
//     {
//       $group: {
//         _id: "$borough",
//         TotalRestaurantes: { $sum: 1 }
//       }
//     },
//     {
//       $sort: { TotalRestaurantes: -1 }
//     },
//     {
//       $limit: 1
//     },
//     {
//       $project: {
//         _id: 0,
//         borough: "$_id",
//         TotalRestaurantes: 1
//       }
//     }
//   ])
  
// ¿Cuántos restaurantes hay por cada tipo de cocina?
// use('sample_restaurants')
// db.restaurants.aggregate([
//     {
//       $unwind: "$cuisine"
//     },
//     {
//       $group: {
//         _id: "$cuisine",
//         Cantidad: { $sum: 1 }
//       }
//     },
//     {
//       $sort: { Cantidad: -1 }
//     },
//     {
//       $project: {
//         _id: 0,
//         cuisine: "$_id",
//         Cantidad: 1
//       }
//     }
//   ])
  
// ¿Cuántos restaurantes hay por cada código postal?
// use('sample_restaurants')
// db.restaurants.aggregate([
//     {
//       $group: {
//         _id: "$address.zipcode",
//         Cantidad: { $sum: 1 }
//       }
//     },
//     {
//       $sort: { Cantidad: -1 }
//     },
//     {
//       $project: {
//         _id: 0,
//         zipcode: "$_id",
//         Cantidad: 1
//       }
//     }
//   ])
  