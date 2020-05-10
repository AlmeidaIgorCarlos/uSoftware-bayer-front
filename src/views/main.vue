<template>
  <div id="main">
      <LateralMenu>
          <MenuItem 
            imageLocation="./../assets/job_icon.svg"
            imageWidth="45"
            text="vacancies"
          />
          <MenuItem 
            imageLocation="./../assets/candidate_icon.svg"
            imageWidth="45"
            text="candidates"
          />
          <MenuItem 
            imageLocation="./../assets/chart_icon.svg"
            imageWidth="45"
            text="charts"
          />
          <MenuItem 
            imageLocation="./../assets/config_icon.svg"
            imageWidth="45"
            text="configuration"
          />
      </Lateralmenu>
    <section id="content">
    </section>
  </div>
</template>

<script>
import LateralMenu from "../components/lateral-menu";
import MenuItem from "../components/menu-item";
export default {
    components:{
        LateralMenu,
        MenuItem
    }
};
</script>

<style lang="scss" scoped>
#main {
  color: white;
  display: flex;
  flex-direction: row;
  height: 100%;
}

#content {
  margin-left: 10px;
  margin-top: 0px;
}
</style>