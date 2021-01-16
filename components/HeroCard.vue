<template>
  <v-card color="grey darken-3" elevation="14">
    <v-img :src="heroImage" :lazy-src="heroAvatar">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-title>
      <v-row>
        <v-col class="text-left" cols="9"> {{ name }}</v-col>
        <v-col class="text-right" cols="3">
          <v-avatar size="30">
            <v-img :src="attributeIcon" :alt="attributeTitle" contain></v-img>
          </v-avatar>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-subtitle> </v-card-subtitle>
  </v-card>
</template>

<script>
const HERO_IMAGE_SB =
  "https://steamcdn-a.akamaihd.net/apps/dota2/images/heroes/{{slug}}_sb.png";
const HERO_IMAGE_FULL =
  "https://steamcdn-a.akamaihd.net/apps/dota2/images/heroes/{{slug}}_full.png";
const PRIMARY_ATTRIBUTES = {
  str: {
    icon: "/apps/dota2/images/misc/attribute-strength.png",
    title: "Strength",
  },
  agi: {
    icon: "/apps/dota2/images/misc/attribute-agility.png",
    title: "Agility",
  },
  int: {
    icon: "/apps/dota2/images/misc/attribute-intelligent.png",
    title: "Intelligent",
  },
};

export default {
  props: {
    id: {
      required: true,
      type: [String, Number],
    },
    name: {
      required: true,
      type: String,
    },
    attribute: {
      required: true,
      type: String,
    },
    roles: {
      required: true,
      type: Array,
    },
    slug: {
      required: true,
      type: String,
    },
  },

  computed: {
    attributeTitle() {
      return PRIMARY_ATTRIBUTES[this.attribute].title;
    },
    attributeIcon() {
      return PRIMARY_ATTRIBUTES[this.attribute].icon;
    },
    heroAvatar() {
      return HERO_IMAGE_SB.replace("{{slug}}", this.slug.slice(14));
    },
    heroImage() {
      return HERO_IMAGE_FULL.replace("{{slug}}", this.slug.slice(14));
    },
  },
};
</script>
