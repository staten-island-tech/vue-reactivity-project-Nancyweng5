<template>
    <div class = "packopenerpage">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <img v-if = "!openingpack && !summary" src = "/packcover.png" class = "pack" @click = "openpack">
=======
      <img v-if = "!openingpack  && !summary" src = "/packcover.png" class = "pack" @click = "openpack">
>>>>>>> Stashed changes
=======
      <img v-if = "!openingpack  && !summary" src = "/packcover.png" class = "pack" @click = "openpack">
>>>>>>> Stashed changes
      <div v-if = "openingpack && currentcard" class = "cardcontainer">
        <div class="card" :class="rarity(currentcard.rarity)" @click="nextcard">
          <img :src = "currentcard.image"/>
        <h5>{{currentcard.name}}</h5>
      </div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <div v-if="summary">
=======
    </div>
      <div v-if = "summary" @click = "reset">
>>>>>>> Stashed changes
=======
    </div>
      <div v-if = "summary" @click = "reset">
>>>>>>> Stashed changes
        <h2> You Pulled : </h2>
        <div class = "summary">
          <Carddisplaye v-for = "card in pack" :key = "card.name" :card = "card"/>
        </div>
      </div>
      </div> 
</template>

<script setup>
import {ref} from 'vue'
import Carddisplaye from '@/Components/carddisplaye.vue';
import { cards } from '@/pulledcards.js'


const mythical = [
  { name: "Venti", rarity: 2, role: "Sub DPS", image: "/Venti_Wish.webp" },
  { name: "Zhongli", rarity: 5, role: "Support", image: "/Zhongli_Wish.webp" },
  { name: "Raiden Shogun", rarity: 5, image: "/Raiden_Shogun_Wish.webp" },
  { name: "Kaedehara Kazuha", rarity: 5, image: "/Kaedehara_Kazuha_Wish.webp" },
  { name: "Flins", rarity: 5, role: "DPS", image: "/Flins_Wish.webp" },
  { name: "Durin", rarity: 5, role: "Sub DPS", image: "/Durin_Wish.webp" },
  { name: "Neuvillette", rarity: 5, role: "Main DPS", image: "/Neuvillette_Wish.webp" },
  { name: "Furina", rarity: 5, role: "Sub DPS", image: "/Furina_Wish.webp" },
  { name: "Mavuika", rarity: 5, role: "Main DPS", image: "/Mavuika_Wish.webp" },
  { name: "Columbina", rarity: 5, role: "Sub DPS", image: "/Columbina.webp" },
  { name: "Bennett", rarity: 5, role: "Support", image: "/Benny.webp" },
  { name: "Skirk", rarity: 4, role: "Main DPS", image: "/Skirk_Wish.webp" },
  { name: "Nahida", rarity: 4, role: "Sub DPS", image: "/Nahida_Wish.webp" },
];
const legendary = [
  { name: "Ineffa", rarity: 5, role: "Sub DPS", image: "/Ineffa_Wish.webp" },
  { name: "Nilou", rarity: 5, role: "Support", image: "/Nilou_Wish.webp" },
  { name: "Lauma", rarity: 5, role: "Support", image: "/Lauma_Wish.webp" },
  { name: "Yelan", rarity: 5, role: "Sub DPS", image: "/Yelan_Wish.webp" },
  { name: "Xilonen", rarity: 5, role: "Support", image: "/Xilonen_Wish.webp" },
  { name: "Citlali", rarity: 5, role: "Support", image: "/citlali.webp" },
  { name: "Zibai", rarity: 5, role: "Main DPS", image: "/Zibai_Wish.webp" },
  { name: "Ororon", rarity: 5, role: "Support", image: "/Ororon_Wish.webp" },
  { name: "Alhaitham", rarity: 4, role: "Main DPS", image: "/Alhaitham.webp" },
  { name: "Varesa", rarity: 4, role: "Main DPS", image: "/Varesa_Wish.webp" },
  { name: "Yae Miko", rarity: 4, role: "Sub DPS", image: "/Yae_Miko_Wish.webp" },
  { name: "Nefer", rarity: 4, role: "Main DPS", image: "/Nefer_Wish.webp" },
  { name: "Wriothesley", rarity: 4, role: "Main DPS", image: "/Wriothesley_Wish.webp" },
  { name: "Navia", rarity: 4, role: "Main DPS", image: "/Navia_Wish.webp" },
  { name: "Kinich", rarity: 4, role: "Main DPS", image: "/Kinich_Wish.webp" },
  { name: "Mualani", rarity: 4, role: "Main DPS", image: "/Mualani_Wish.webp" },
  { name: "Arlecchino", rarity: 4, role: "Main DPS", image: "/Arle.webp" },
  { name: "Clorinde", rarity: 4, role: "Main DPS", image: "/Clorinde.webp" },
  { name: "Xingqiu", rarity: 4, role: "Sub DPS", image: "/Xingqiu_Wish.webp" },
  { name: "Chevreuse", rarity: 4, role: "Support", image: "/Chevreuse.webp" },
  { name: "Xiao", rarity: 3, role: "Main DPS", image: "/Xiao_Wish.webp" },
];
const epic = [
  { name: "Jean", rarity: 4, role: "Support", image: "/Jean_Wish.webp" },
  { name: "Sangonomiya Kokomi", rarity: 4, role: "Support", image: "/Sangonomiya_Kokomi_Wish.webp" },
  { name: "Escoffier", rarity: 4, role: "Sub DPS", image: "/Escoffier_Wish.webp" },
  { name: "Shenhe", rarity: 4, role: "Support", image: "/Shenhe_Wish.webp" },
  { name: "Baizhu", rarity: 4, role: "Support", image: "/Baizhu.webp" },
  { name: "Chiori", rarity: 4, role: "Sub DPS", image: "/Chiori.webp" },
  { name: "Sigewinne", rarity: 4, role: "Support", image: "/Sigewinne_Wish.webp" },
  { name: "Emilie", rarity: 4, role: "Sub DPS", image: "/Emilie_Wish.webp" },
  { name: "Mualani", rarity: 4, role: "Main DPS", image: "/Mualani_Wish.webp" },
  { name: "Chasca", rarity: 4, role: "Main DPS", image: "/Chasca.webp" },
  { name: "Iansan", rarity: 4, role: "Support", image: "/Iansan_Wish.webp" },
  { name: "Aino", rarity: 4, role: "Support", image: "/aino.webp" },
  { name: "Fischl", rarity: 4, role: "Sub DPS", image: "/Fischl_Wish.webp" },
  { name: "Kuki Shinobu", rarity: 4, role: "Sub DPS", image: "/Kuki_Shinobu_Wish.webp" },
  { name: "Xiangling", rarity: 4, role: "Sub DPS", image: "/Xiangling_Wish.webp" },
  { name: "Wanderer", rarity: 3, role: "Main DPS", image: "/Wanderer_Wish.webp" },
];
const rare = [
  { name: "Kamisato Ayaka", rarity: 3, role: "Main DPS", image: "/Kamisato_Ayaka_Wish.webp" },
  { name: "Kamisato Ayato", rarity: 3, role: "Main DPS", image: "/Kamisato_Ayato_Wish.webp" },
  { name: "Tartaglia", rarity: 3, role: "Main DPS", image: "/Tartaglia_Wish.webp" },
  { name: "Cyno", rarity: 3, role: "Main DPS", image: "/Cyno.webp" },
  { name: "Eula", rarity: 3, role: "Main DPS", image: "/Eula_Wish.webp" },
  { name: "Ganyu", rarity: 3, role: "Main DPS", image: "/Ganyu_Wish.webp" },
  { name: "Hu Tao", rarity: 3, role: "Main DPS", image: "/Hu_Tao_Wish.webp" },
  { name: "Itto", rarity: 3, role: "Main DPS", image: "/Itto.webp" },
  { name: "Keqing", rarity: 3, role: "Main DPS", image: "/Keqing_Wish.webp" },
  { name: "Klee", rarity: 3, role: "Main DPS", image: "/Klee_Wish.webp" },
  { name: "Mona", rarity: 3, role: "Support", image: "/Mona_Wish.webp" },
  { name: "Yoimiya", rarity: 3, role: "Main DPS", image: "/Yoimiya_Wish.webp" },
  { name: "Lyney", rarity: 3, role: "Main DPS", image: "/Lyney_Wish.webp" },
  { name: "Xianyun", rarity: 3, role: "Support", image: "/Xianyun_Wish.webp" },
  { name: "Dahlia", rarity: 3, role: "Support", image: "/Dahlia_Wish.webp" },
  { name: "Faruzan", rarity: 3, role: "Support", image: "/Faruzan_Wish.webp" },
  { name: "Kujou Sara", rarity: 3, role: "Support", image: "/Kujou_Sara_Wish.webp" },
  { name: "Sucrose", rarity: 3, role: "Support", image: "/Sucrose_Wish.webp" },
  { name: "Yaoyao", rarity: 3, role: "Support", image: "/Yaoyao_Wish.webp" },
  { name: "Charlotte", rarity: 3, role: "Support", image: "/Charlotte.webp" },
  { name: "Lan Yan", rarity: 3, role: "Support", image: "/Lan_Yan_Wish.webp" },
  { name: "Illuga", rarity: 3, role: "Support", image: "/Illuga_Wish.webp" },
];
const uncommon = [
  { name: "Albedo", rarity: 2, role: "Sub DPS", image: "/albedo.webp" },
  { name: "Diluc", rarity: 2, role: "Main DPS", image: "/Diluc_Wish.webp" },
  { name: "Yumemizuki", rarity: 2, role: "Main DPS", image: "/Yumemizuki_Mizuki_Wish.webp" },
  { name: "Qiqi", rarity: 2, role: "Support", image: "/Qiqi_Wish.webp" },
  { name: "Tighnari", rarity: 2, role: "Sub DPS", image: "/Tighnari_Wish.webp" },
  { name: "Dehya", rarity: 2, role: "Support", image: "/Dehya_Wish.webp" },
  { name: "Ifa", rarity: 2, role: "Sub DPS", image: "/Ifa_Wish.webp" },
  { name: "Barbara", rarity: 2, role: "Support", image: "/Barbara.webp" },
  { name: "Beidou", rarity: 2, role: "Sub DPS", image: "/Beidou.webp" },
  { name: "Jahoda", rarity: 2, role: "Support", image: "/Jahoda_Wish.webp" },
  { name: "Collei", rarity: 2, role: "Support", image: "/Collei.webp" },
  { name: "Diona", rarity: 2, role: "Support", image: "/Diona_Wish.webp" },
  { name: "Dori", rarity: 2, role: "Support", image: "/Dori_Wish.webp" },
  { name: "Gorou", rarity: 2, role: "Support", image: "/Gorou_Wish.webp" },
  { name: "Kaeya", rarity: 2, role: "Sub DPS", image: "/Kaeya_Wish.webp" },
  { name: "Layla", rarity: 2, role: "Support", image: "/Layla_Wish.webp" },
  { name: "Noelle", rarity: 2, role: "Main DPS", image: "/Noelle_Wish.webp" },
  { name: "Rosaria", rarity: 2, role: "Support", image: "/Rosaria_Wish.webp" },
  { name: "Thoma", rarity: 2, role: "Support", image: "/Thoma_Wish.webp" },
  { name: "Mika", rarity: 2, role: "Support", image: "/Mika_Wish.webp" },
  { name: "Kirara", rarity: 2, role: "Support", image: "/Kirara_Wish.webp" },
  { name: "Gaming", rarity: 2, role: "Main DPS", image: "/Gaming_Wish.webp" },
  { name: "Kachina", rarity: 2, role: "Sub DPS", image: "/Kachina_Wish.webp" },
];
const common = [
  { name: "Aloy", rarity: 1, role: "Sub DPS", image: "/Aloy_Wish.webp" },
  { name: "Amber", rarity: 1, role: "Sub DPS", image: "/Amber.webp" },
  { name: "Candace", rarity: 1, role: "Support", image: "/Candace.webp" },
  { name: "Chongyun", rarity: 1, role: "Support", image: "/Chongyun.webp" },
  { name: "Shikanoin Heizou", rarity: 1, role: "Sub DPS", image: "/Shikanoin_Heizou_Wish.webp" },
  { name: "Lisa", rarity: 1, role: "Support", image: "/Lisa_Wish.webp" },
  { name: "Ningguang", rarity: 1, role: "Main DPS", image: "/Ningguang_Wish.webp" },
  { name: "Razor", rarity: 1, role: "Main DPS", image: "/Razor_Wish.webp" },
  { name: "Sayu", rarity: 1, role: "Support", image: "/Sayu_Wish.webp" },
  { name: "Xinyan", rarity: 1, role: "Support", image: "/Xinyan_Wish.webp" },
  { name: "Yanfei", rarity: 1, role: "Main DPS", image: "/Yanfei_Wish.webp" },
  { name: "Yun Jin", rarity: 1, role: "Support", image: "/Yun_Jin_Wish.webp" },
  { name: "Kaveh", rarity: 1, role: "Main DPS", image: "/Kaveh_Wish.webp" },
  { name: "Lynette", rarity: 1, role: "Support", image: "/Lynette_Wish.webp" },
  { name: "Freminet", rarity: 1, role: "Main DPS", image: "/Freminet_Wish.webp" },
  { name: "Sethos", rarity: 1, role: "Sub DPS", image: "/Sethos_Wish.webp" },
];

const openingpack = ref(false)
const summary = ref(false)
const index = ref (0)
const pack = ref([]);
const currentcard = ref(null)

function random(array){
  return array[Math.floor(Math.random()* array.length)]
}
function openpack(){
  pack.value = []
  index.value = 0
  openingpack.value = true
  summary.value = false
for (let i = 0; i < 5; i++) {
    let cards = Math.random()
    if (cards < 0.02) pack.value.push(random(mythical))
    else if (cards < 0.08) pack.value.push(random(legendary))
    else if (cards < 0.2) pack.value.push(random(epic))
    else if (cards < 0.4) pack.value.push(random(rare))
    else if (cards < 0.7) pack.value.push(random(uncommon))
    else pack.value.push(random(common))
  }
   currentcard.value = pack.value[0]
}
function nextcard(){
  index.value ++
  if (index.value < pack.value.length){
    currentcard.value = pack.value[index.value]
    console.log(currentcard.value, pack.value.length)
  } else {
    finish()
    console.log("i should show smth")
  }
}
function finish(){
  cards.value.push(...pack.value);
  openingpack.value = false 
  summary.value = true
  currentcard.value = null
  console.log(summary.value)
}

function reset(){
  summary.value = false
}
function reset(){
  summary.value = false
}
function rarity(r){
  if (r === 1) return "common"
  if (r === 2) return "uncommon"
  if (r === 3) return "rare"
  if (r === 4) return "epic"
  if (r === 5) return "legendary"
  return "mythical";
}
</script>

<style scoped>

.packopenerpage {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background-color: #FCF6F5;
  min-height: 100vh;
}
.summary {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
.pack {
  width: 250px;
  cursor: pointer;
  margin-top: 70px;
}
.card {
  width: 700px;
  margin-top: 30px;
  border: 10px solid;
  border-radius: 12px;
}

.card img {
  width: 100%;
}
h5 {
  font-size: 30px;
  text-align: center;
  color: #7b9acc;
}
.common { 
  border-color: rgb(159, 151, 151); 
}
.uncommon {
   border-color: rgb(129, 187, 129); 
  }
.rare { 
  border-color: rgb(144, 144, 198); 
}
.epic {
   border-color: rgb(144, 8, 144);
   }
.legendary {
   border-color: rgb(236, 227, 171); 
  }
.mythical { 
  border-color: rgb(222, 100, 161);
 }

.summary {
  display: flex;
  gap: 10px;
}
</style>