<template>
  <div id="user">
      <LateralMenu ref="lateralMenu">
          <MenuItem 
            imageLocation="./../assets/job_icon.svg"
            imageWidth="50"
            text="vacancies"
            backgroundColor="black"
            @setStatus="setStatus"
          />
          <MenuItem 
            imageLocation="./../assets/candidate_icon.svg"
            imageWidth="50"
            text="candidates"
            @setStatus="setStatus"
          />
          <MenuItem 
            imageLocation="./../assets/chart_icon.svg"
            imageWidth="50"
            text="charts"
            @setStatus="setStatus"
          />
          <MenuItem 
            imageLocation="./../assets/config_icon.svg"
            imageWidth="50"
            text="configuration"
            @setStatus="setStatus"
          />
      </Lateralmenu>
    <section id="content">
      <ContentBar height="100px" color="#d9d9d9" />
    </section>
  </div>
</template>

<script>
import LateralMenu from "../components/lateral-menu";
import MenuItem from "../components/menu-item";
import ContentBar from "../components/content-bar"
export default {
    components:{
        LateralMenu,
        MenuItem,
        ContentBar
    },
    mounted(){
      const lateralMenu = this.$refs.lateralMenu
      const lateralMenuChildren = lateralMenu.$children.map(e => e.$refs.menuItem)

      this.listItems = lateralMenuChildren
    },
    data(){
      return {}
    },
    methods:{
      setStatus(element){
        if(this.listItems){
          this.listItems.forEach(e => {
            if(element !== e){
              e.style.backgroundColor = 'black'
            }else
            e.style.backgroundColor = '#d9d9d9'
          });
        }else this.listItems = []
      }
    }
};
</script>

<style lang="scss" scoped>

#user {
  display: flex;
  flex-direction: row;
}

#content {
  margin-left: 0px;
  margin-top: 0px;
  width:100%;
  background-color:white;
}
</style>