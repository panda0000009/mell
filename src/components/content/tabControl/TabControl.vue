<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
          class = "tab-control-item"
          :class="{active :index === currentIndex}"
          @click = "itemClick(index)"
          :key="item.id">
          <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active{
  color: #83AF9B;
}
.active span{
  border-bottom: 3.5px solid #83AF9B;
}
</style>
