
export default function (route){
  const to = ref(route.query?.to);
  onMounted(()=>{
    setTimeout(()=>{
      document.getElementById(to.value).scrollIntoView({behavior: "smooth"})
    },100)
  })
}