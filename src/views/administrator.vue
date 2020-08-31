<template>
  <div id="user">
      <LateralMenu ref="lateralMenu">
          <MenuItem 
            imageLocation="./../assets/job_icon.svg"
            :imageWidth="styleProperties.menuItemImageWidth"
            text="vacancies"
            backgroundColor="black"
            @setMenuItemStatus="setMenuItemStatus"
            @activateComponent="activateComponentVacancyList"
          />
      </Lateralmenu>
    <section id="content">
      <ContentBar :height="styleProperties.contentBarHeight" color="#d9d9d9" />
      <router-view />
    </section>
  </div>
</template>

<script>
import LateralMenu from "../components/lateral-menu";
import MenuItem from "../components/menu-item";
import ContentBar from "../components/content-bar"
import {setMenuItemStatus as setMenuItemStatusService} from "../services/util.service"
import {mapState, mapActions} from 'vuex'
import {setStateActionBarAction} from '../store/actions/action-bar.action'
import ActionName from '../models/action-name.enum'
import {setLocalStorageItem} from "../services/local-storage.service";
import router from '../router/index'

export default {
    components:{
        LateralMenu,
        MenuItem,
        ContentBar,
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
      ...mapActions([setStateActionBarAction.name]),
      setMenuItemStatus(element){
        setMenuItemStatusService(element, this.listItems)
      },
      signOut(){
          setLocalStorageItem("signin", {});
          router.push("/", () => {
          router.go(0);
          });
      },
      activateComponentVacancyList(){
        router.replace('/administrator/vacancies')
        this.setStateActionBarAction({
        actionName: ActionName.Add,
        isVisible: true,
        action: false
        })
      }
    },
    beforeMount(){
      this.setStateActionBarAction({
        actionName: ActionName.Add,
        isVisible: false,
        action: false
      })
      this.setStateActionBarAction({
        actionName: ActionName.Filter,
        isVisible: false,
        action: false
      })
      this.setStateActionBarAction({
        actionName: ActionName.SignOut,
        isVisible: true,
        action: this.signOut
      })
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