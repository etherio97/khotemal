<template>
  <v-container>
    <v-card class="px-3">
      <v-card-title>
        <v-row justify="space-between">
          <v-col>
            <h2 class="py-2">ဟီးရိုးများ</h2>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="3">
            <v-select
              v-model="sortBy"
              :items="sorting"
              append-icon="mdi-sort"
              label="sort by"
              flat
              rounded
            ></v-select>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text v-if="sortBy === 'Team'">
        <v-row>
          <!-- radiant heroes -->
          <v-col cols="12">
            <h2>Radiant</h2>
          </v-col>
          <v-col sm="6" md="4" lg="3" v-for="hero in radiant" :key="hero.id">
            <HeroCard
              :id="hero.id"
              :name="hero.localized_name"
              :slug="hero.name"
              :attribute="hero.primary_attr"
              :roles="hero.roles"
            ></HeroCard>
          </v-col>
          <!-- dire heroes -->
          <v-col cols="12">
            <h2>Dire</h2>
          </v-col>
          <v-col sm="6" md="4" lg="3" v-for="hero in dire" :key="hero.id">
            <HeroCard
              :id="hero.id"
              :name="hero.localized_name"
              :slug="hero.name"
              :attribute="hero.primary_attr"
              :roles="hero.roles"
            ></HeroCard>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text v-else-if="sortBy === 'Attribute'">
        <v-row>
          <!-- strength heroes -->
          <v-col cols="12">
            <h2>Strength</h2>
          </v-col>
          <v-col sm="6" md="4" lg="3" v-for="hero in strength" :key="hero.id">
            <HeroCard
              :id="hero.id"
              :name="hero.localized_name"
              :slug="hero.name"
              :attribute="hero.primary_attr"
              :roles="hero.roles"
            ></HeroCard>
          </v-col>
          <!-- Agility heroes -->
          <v-col cols="12">
            <h2>Agility</h2>
          </v-col>
          <v-col sm="6" md="4" lg="3" v-for="hero in agility" :key="hero.id">
            <HeroCard
              :id="hero.id"
              :name="hero.localized_name"
              :slug="hero.name"
              :attribute="hero.primary_attr"
              :roles="hero.roles"
            ></HeroCard>
          </v-col>
          <!-- intelligent heroes -->
          <v-col cols="12">
            <h2>Intelligent</h2>
          </v-col>
          <v-col
            sm="6"
            md="4"
            lg="3"
            v-for="hero in intelligent"
            :key="hero.id"
          >
            <HeroCard
              :id="hero.id"
              :name="hero.localized_name"
              :slug="hero.name"
              :attribute="hero.primary_attr"
              :roles="hero.roles"
            ></HeroCard>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text v-else-if="sortBy === 'Name'">
        <v-row>
          <v-col sm="6" md="4" lg="3" v-for="hero in heroes" :key="hero.id">
            <HeroCard
              :id="hero.id"
              :name="hero.localized_name"
              :slug="hero.name"
              :attribute="hero.primary_attr"
              :roles="hero.roles"
            ></HeroCard>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
const radiants = [
  1,
  5,
  6,
  7,
  8,
  9,
  10,
  12,
  13,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  25,
  27,
  32,
  34,
  35,
  38,
  46,
  48,
  49,
  51,
  53,
  57,
  58,
  59,
  62,
  64,
  66,
  70,
  72,
  73,
  75,
  78,
  80,
  83,
  84,
  86,
  87,
  89,
  90,
  91,
  95,
  96,
  98,
  99,
  100,
  101,
  103,
  104,
  105,
  106,
  107,
  110,
  111,
  114,
  119,
  120,
  123,
  126,
  128,
  129,
];

export default {
  name: "Heroes",
  data: () => ({
    sortBy: "Name",
    sorting: ["Name", "Attribute", "Team"],
    heroes: [],
  }),
  computed: {
    radiant() {
      return this.heroes.filter(({ id }) => radiants.includes(id));
    },
    dire() {
      return this.heroes.filter(({ id }) => !radiants.includes(id));
    },
    strength() {
      return this.heroes.filter(({ primary_attr }) => primary_attr === "str");
    },
    agility() {
      return this.heroes.filter(({ primary_attr }) => primary_attr === "agi");
    },
    intelligent() {
      return this.heroes.filter(({ primary_attr }) => primary_attr === "int");
    },
  },
};
</script>
