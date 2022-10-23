function NewItem() {
  return (
    <>
    <h1>You tube all links here</h1>
    </>
  )
}
//   const test = 'https://youtu.be/0IGasR4mAOU'
//   const test1 = test.slice(17);
//   return (
//     <div className="container mx-auto border">
//       <h1>THIS SHOULD BE DYNAMIC PAGE</h1>
//       <h3 className="text-2xl text-center p-3 space-y-2">Video Name</h3>
//       <iframe
//         width="560"
//         height="315"
//         src={`https://www.youtube.com/embed/${test1}`}
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const headers = {

//   }
//   const test = await fetch('https://youtu.be/rP8igAi_-fs', {
//         headers: headers
//       })
//       //console.log(test.url)

//       return {
//         props: {
//           data: test.url
//         }
//       }
//     }

export default NewItem;
