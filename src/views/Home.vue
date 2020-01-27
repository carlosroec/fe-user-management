<template>
  <div class="home">
    <FiltersHeader />
    <table-component
      :data="[
        { enabled: 'true', activated: 'true', name: 'Carlos', usergroup: 'A', email: 'a@a.com', lastVisit: '04/10/1940', registered: '04/10/1940', id: 10 },
        { enabled: 'true', activated: 'true', name: 'Carlos', usergroup: 'A', email: 'a@a.com', lastVisit: '04/10/1940', registered: '04/10/1940', id: 10 },
      ]"
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
import FiltersHeader from '@/components/FiltersHeader.vue';
import { TableComponent, TableColumn } from 'vue-table-component';

export default {
  name: 'home',
  components: {
    FiltersHeader,
    TableComponent,
    TableColumn
  }
}
</script>
