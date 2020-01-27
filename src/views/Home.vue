<template>
  <div class="home">
    <FiltersHeader />
    <table-component
      :data="currentUsers"
      sort-by="songs"
      sort-order="asc"
      >
      <table-column show="enabled" label="Enabled"></table-column>
      <table-column show="activated" label="Activated"></table-column>
      <table-column show="name" label="Name"></table-column>
      <table-column show="email" label="Email"></table-column>
      <table-column show="usergroup" label="Usergroup"></table-column>
      <table-column show="lastVisit" label="Last Visit"></table-column>
      <table-column show="createdAt" label="Registered"></table-column>
      <table-column show="id" label="ID"></table-column>
    </table-component>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import FiltersHeader from '@/components/FiltersHeader.vue';
import { TableComponent, TableColumn } from 'vue-table-component';

export default {
  name: 'home',
  components: {
    FiltersHeader,
    TableComponent,
    TableColumn
  },
  computed: {
    ...mapGetters({
      users: "users",
    })
  },
  data() {
    return {
      currentUsers: [],
    }
  },
  methods: {
    getUsers() {
      this.$store.dispatch('getUsers').then(users => {
        this.currentUsers = [];
        users.response.forEach(user => {
          this.currentUsers.push({
            enabled: 'true', 
            activated: 'true',
            name: user.name,
            usergroup: user.usergroup,
            email: user.email,
            lastVisit: user.lastVisit ? user.lastVisit : "",
            createdAt: user.createdAt,
            id: user.id
          })
        })
      })
    }
  },
  mounted() {
    this.getUsers();
  }
}
</script>
