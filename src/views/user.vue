<template>
  <div id="user">
      <LateralMenu >
          <MenuItem 
            imageLocation="./../assets/job_icon.svg"
            imageWidth="50"
            text="vacancies"
          />
          <MenuItem 
            imageLocation="./../assets/candidate_icon.svg"
            imageWidth="50"
            text="candidates"
          />
          <MenuItem 
            imageLocation="./../assets/chart_icon.svg"
            imageWidth="50"
            text="charts"
          />
          <MenuItem 
            imageLocation="./../assets/config_icon.svg"
            imageWidth="50"
            text="configuration"
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