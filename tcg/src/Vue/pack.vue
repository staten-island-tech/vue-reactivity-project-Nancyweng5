<template>
    <div class = "packopenerpage">
      <img v-if = "!opening" src = "/packcover" class = "pack" @click = "openpack">
      <div vif = "opening && currentcard" class = "cardcontainer">
        <Carddisplaye :card = "currentcard" @click = "nextcard"/>
        <p>Click to continue</p>
      </div>
      <div v-if = "summary">
        <h2> You Puller : </h2>
        <div class = "summary">
          <Carddisplaye v-for = "card in pack" :key = "card.name" :card = "card"/>
        </div> 
      </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import Carddisplaye from '@/Components/carddisplaye.vue';

 const mythical = [
   { name: "Venti", rarity: 2, role: "Sub DPS", image: "/public/venti.webp" },
  { name: "Zhongli", rarity: 5, role: "Support", image: "/public/zhongli_wish.webp" },
  { name: "Raiden Shogun", rarity: 5, image: "/public/raiden_shogun_wish.webp" },
  { name: "Kaedehara Kazuha", rarity: 5, image: "/public/kaedehara_kazuha_wish.webp" },
  { name: "Flins", rarity: 5, role: "DPS", image: "/public/flins.webp" },
  { name: "Durin", rarity: 5, role: "Sub DPS", image: "/public/durin.webp" },
  { name: "Neuvillette", rarity: 5, role: "Main DPS", image: "/public/neuvillette.webp" },
  { name: "Furina", rarity: 5, role: "Sub DPS", image: "/public/furina.webp" },
  { name: "Mavuika", rarity: 5, role: "Main DPS", image: "/public/mavuika.webp" },
  { name: "Columbina", rarity: 5, role: "Sub DPS", image: "/public/columbina.webp" },
  { name: "Bennett", rarity: 5, role: "Support", image: "/public/bennett.webp" },
  { name: "Skirk", rarity: 4, role: "Main DPS", image: "/public/skirk.webp" },
  { name: "Nahida", rarity: 4, role: "Sub DPS", image: "/public/nahida.webp" },
]
const legendary = [
  { name: "Ineffa", rarity: 5, role: "Sub DPS", image: "/public/ineffa.webp" },
  { name: "Nilou", rarity: 5, role: "Support", image: "/public/nilou.webp" },
  { name: "Lauma", rarity: 5, role: "Support", image: "/public/lauma.webp" },
  { name: "Yelan", rarity: 5, role: "Sub DPS", image: "/public/yelan.webp" },
  { name: "Xilonen", rarity: 5, role: "Support", image: "/public/xilonen.webp" },
  { name: "Citlali", rarity: 5, role: "Support", image: "/public/citlali.webp" },
  { name: "Zibai", rarity: 5, role: "Main DPS", image: "/public/zibai.webp" },
  { name: "Ororon", rarity: 5, role: "Support", image: "/public/ororon.webp" },
  { name: "Alhaitham", rarity: 4, role: "Main DPS", image: "/public/alhaitham.webp" },
  { name: "Varesa", rarity: 4, role: "Main DPS", image: "/public/varesa.webp" },
  { name: "Yae Miko", rarity: 4, role: "Sub DPS", image: "/public/yae_miko.webp" },
  { name: "Nefer", rarity: 4, role: "Main DPS", image: "/public/nefer.webp" },
  { name: "Wriothesley", rarity: 4, role: "Main DPS", image: "/public/wriothesley.webp" },
  { name: "Navia", rarity: 4, role: "Main DPS", image: "/public/navia.webp" },
  { name: "Kinich", rarity: 4, role: "Main DPS", image: "/public/kinich.webp" },
  { name: "Mualani", rarity: 4, role: "Main DPS", image: "/public/mualani.webp" },
  { name: "Arlecchino", rarity: 4, role: "Main DPS", image: "/public/arlecchino.webp" },
  { name: "Clorinde", rarity: 4, role: "Main DPS", image: "/public/clorinde.webp" },
  { name: "Xingqiu", rarity: 4, role: "Sub DPS", image: "/public/xingqiu.webp" },
  { name: "Chevreuse", rarity: 4, role: "Support", image: "/public/chevreuse.webp" },
  { name: "Xiao", rarity: 3, role: "Main DPS", image: "/public/xiao.webp" },
];
const epic = [
  { name: "Jean", rarity: 4, role: "Support", image: "/public/jean.webp" },
  { name: "Kokomi", rarity: 4, role: "Support", image: "/public/kokomi.webp" },
  { name: "Escoffier", rarity: 4, role: "Sub DPS", image: "/public/escoffier.webp" },
  { name: "Shenhe", rarity: 4, role: "Support", image: "/public/shenhe.webp" },
  { name: "Baizhu", rarity: 4, role: "Support", image: "/public/baizhu.webp" },
  { name: "Chiori", rarity: 4, role: "Sub DPS", image: "/public/chiori.webp" },
  { name: "Sigewinne", rarity: 4, role: "Support", image: "/public/sigewinne.webp" },
  { name: "Emilie", rarity: 4, role: "Sub DPS", image: "/public/emilie.webp" },
  { name: "Mualani", rarity: 4, role: "Main DPS", image: "/public/mualani.webp" },
  { name: "Chasca", rarity: 4, role: "Main DPS", image: "/public/chasca.webp" },
  { name: "Iansan", rarity: 4, role: "Support", image: "/public/iansan.webp" },
  { name: "Aino", rarity: 4, role: "Support", image: "/public/aino.webp" },
  { name: "Fischl", rarity: 4, role: "Sub DPS", image: "/public/fischl.webp" },
  { name: "Kuki Shinobu", rarity: 4, role: "Sub DPS", image: "/public/kuki_shinobu.webp" },
  { name: "Xiangling", rarity: 4, role: "Sub DPS", image: "/public/xiangling.webp" },
  { name: "Wanderer", rarity: 3, role: "Main DPS", image: "/public/wanderer.webp" },
];

const rare = [
  { name: "Ayaka", rarity: 3, role: "Main DPS", image: "/public/ayaka.webp" },
  { name: "Ayato", rarity: 3, role: "Main DPS", image: "/public/ayato.webp" },
  { name: "Childe", rarity: 3, role: "Main DPS", image: "/public/childe.webp" },
  { name: "Cyno", rarity: 3, role: "Main DPS", image: "/public/cyno.webp" },
  { name: "Eula", rarity: 3, role: "Main DPS", image: "/public/eula.webp" },
  { name: "Ganyu", rarity: 3, role: "Main DPS", image: "/public/ganyu.webp" },
  { name: "Hu Tao", rarity: 3, role: "Main DPS", image: "/public/hu_tao.webp" },
  { name: "Itto", rarity: 3, role: "Main DPS", image: "/public/itto.webp" },
  { name: "Keqing", rarity: 3, role: "Main DPS", image: "/public/keqing.webp" },
  { name: "Klee", rarity: 3, role: "Main DPS", image: "/public/klee.webp" },
  { name: "Mona", rarity: 3, role: "Support", image: "/public/mona.webp" },
  { name: "Yoimiya", rarity: 3, role: "Main DPS", image: "/public/yoimiya.webp" },
  { name: "Lyney", rarity: 3, role: "Main DPS", image: "/public/lyney.webp" },
  { name: "Xianyun", rarity: 3, role: "Support", image: "/public/xianyun.webp" },
  { name: "Dahlia", rarity: 3, role: "Support", image: "/public/dahlia.webp" },
  { name: "Faruzan", rarity: 3, role: "Support", image: "/public/faruzan.webp" },
  { name: "Sara", rarity: 3, role: "Support", image: "/public/sara.webp" },
  { name: "Sucrose", rarity: 3, role: "Support", image: "/public/sucrose.webp" },
  { name: "Yaoyao", rarity: 3, role: "Support", image: "/public/yaoyao.webp" },
  { name: "Charlotte", rarity: 3, role: "Support", image: "/public/charlotte.webp" },
  { name: "Lan Yan", rarity: 3, role: "Support", image: "/public/lan_yan.webp" },
  { name: "Illuga", rarity: 3, role: "Support", image: "/public/illuga.webp" },
];
const uncommon = [
  { name: "Albedo", rarity: 2, role: "Sub DPS", image: "/public/albedo.webp" },
  { name: "Diluc", rarity: 2, role: "Main DPS", image: "/public/diluc.webp" },
  { name: "Yumemizuki", rarity: 2, role: "Main DPS", image: "/public/yumemizuki.webp" },
  { name: "Qiqi", rarity: 2, role: "Support", image: "/public/qiqi.webp" },
  { name: "Tighnari", rarity: 2, role: "Sub DPS", image: "/public/tighnari.webp" },
  { name: "Dehya", rarity: 2, role: "Support", image: "/public/dehya.webp" },
  { name: "Ifa", rarity: 2, role: "Sub DPS", image: "/public/ifa.webp" },
  { name: "Barbara", rarity: 2, role: "Support", image: "/public/barbara.webp" },
  { name: "Beidou", rarity: 2, role: "Sub DPS", image: "/public/beidou.webp" },
  { name: "Jahoda", rarity: 2, role: "Support", image: "/public/jahoda.webp" },
  { name: "Collei", rarity: 2, role: "Support", image: "/public/collei.webp" },
  { name: "Diona", rarity: 2, role: "Support", image: "/public/diona.webp" },
  { name: "Dori", rarity: 2, role: "Support", image: "/public/dori.webp" },
  { name: "Gorou", rarity: 2, role: "Support", image: "/public/gorou.webp" },
  { name: "Kaeya", rarity: 2, role: "Sub DPS", image: "/public/kaeya.webp" },
  { name: "Layla", rarity: 2, role: "Support", image: "/public/layla.webp" },
  { name: "Noelle", rarity: 2, role: "Main DPS", image: "/public/noelle.webp" },
  { name: "Rosaria", rarity: 2, role: "Support", image: "/public/rosaria.webp" },
  { name: "Thoma", rarity: 2, role: "Support", image: "/public/thoma.webp" },
  { name: "Mika", rarity: 2, role: "Support", image: "/public/mika.webp" },
  { name: "Kirara", rarity: 2, role: "Support", image: "/public/kirara.webp" },
  { name: "Gaming", rarity: 2, role: "Main DPS", image: "/public/gaming.webp" },
  { name: "Kachina", rarity: 2, role: "Sub DPS", image: "/public/kachina.webp" },
];
const common = [
  { name: "Aloy", rarity: 1, role: "Sub DPS", image: "/public/aloy.webp" },
  { name: "Amber", rarity: 1, role: "Sub DPS", image: "/public/amber.webp" },
  { name: "Candace", rarity: 1, role: "Support", image: "/public/candace.webp" },
  { name: "Chongyun", rarity: 1, role: "Support", image: "/public/chongyun.webp" },
  { name: "Heizou", rarity: 1, role: "Sub DPS", image: "/public/heizou.webp" },
  { name: "Lisa", rarity: 1, role: "Support", image: "/public/lisa.webp" },
  { name: "Ningguang", rarity: 1, role: "Main DPS", image: "/public/ningguang.webp" },
  { name: "Razor", rarity: 1, role: "Main DPS", image: "/public/razor.webp" },
  { name: "Sayu", rarity: 1, role: "Support", image: "/public/sayu.webp" },
  { name: "Xinyan", rarity: 1, role: "Support", image: "/public/xinyan.webp" },
  { name: "Yanfei", rarity: 1, role: "Main DPS", image: "/public/yanfei.webp" },
  { name: "Yun Jin", rarity: 1, role: "Support", image: "/public/yun_jin.webp" },
  { name: "Kaveh", rarity: 1, role: "Main DPS", image: "/public/kaveh.webp" },
  { name: "Lynette", rarity: 1, role: "Support", image: "/public/lynette.webp" },
  { name: "Freminet", rarity: 1, role: "Main DPS", image: "/public/freminet.webp" },
  { name: "Sethos", rarity: 1, role: "Sub DPS", image: "/public/sethos.webp" },
];

const openingpack = ref(false)
const summary = ref(false)
const pack = ref([])
const index = ref (0)

function random(array){
  return array[Math.floor(Math.random()* array.length)]
}
function openpack(){
  pack.value = []
  index.value = 0
  opening.value = true
  summary.value = false
}
for (let i = 0; i < 5; i++) {
    let cards = Math.random()
    if (cards < 0.02) pack.value.push(random(mythical))
    else if (cards < 0.08) pack.value.push(random(legendary))
  else if (cards < 0.2) pack.value.push(random(epic))
else if (cards < 0.4) pack.value.push(random(rare))
else if (cards < 0.7) pack.value.push(random(uncommon))
else pack.value.push(random(common))
}
</script>

<style scoped>

</style>

<!-- background = #FCF6F5
words = #7b9acc  -->