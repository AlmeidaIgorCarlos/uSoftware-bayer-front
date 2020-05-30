<template>
  <div id="user">
      <LateralMenu ref="lateralMenu">
          <MenuItem 
            imageLocation="./../assets/job_icon.svg"
            :imageWidth="styleProperties.menuItemImageWidth"
            text="vacancies"
            backgroundColor="black"
            @setMenuItemStatus="setMenuItemStatus"
          />
          <MenuItem 
            imageLocation="./../assets/candidate_icon.svg"
            :imageWidth="styleProperties.menuItemImageWidth"
            text="candidates"
            @setMenuItemStatus="setMenuItemStatus"
          />
          <MenuItem 
            imageLocation="./../assets/chart_icon.svg"
            :imageWidth="styleProperties.menuItemImageWidth"
            text="charts"
            @setMenuItemStatus="setMenuItemStatus"
          />
          <MenuItem 
            imageLocation="./../assets/config_icon.svg"
            :imageWidth="styleProperties.menuItemImageWidth"
            text="configuration"
            @setMenuItemStatus="setMenuItemStatus"
          />
      </Lateralmenu>
    <section id="content">
      <ContentBar :height="styleProperties.contentBarHeight" color="#d9d9d9" />
      <Vacancies />
    </section>
  </div>
</template>

<script>
import LateralMenu from "../components/lateral-menu";
import MenuItem from "../components/menu-item";
import ContentBar from "../components/content-bar"
import Vacancies from "../components/vacancies"
import {setMenuItemStatus as setMenuItemStatusService} from "../services/util.service"
import {mapState} from 'vuex'

export default {
    components:{
        LateralMenu,
        MenuItem,
        ContentBar,
        Vacancies
    },
    computed:{
      ...mapState(['styleProperties'])
    },
    mounted(){
      const lateralMenu = this.$refs.lateralMenu
      const lateralMenuChildren = lateralMenu.$children.map(e => e.$refs.menuItem)

      this.listItems = lateralMenuChildren
    },
    methods:{
      setMenuItemStatus(element){
        setMenuItemStatusService(element, this.listItems)
      }
    },
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