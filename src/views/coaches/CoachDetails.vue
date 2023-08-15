<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>{{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Coach } from '../../types/interfaces/coaches';

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedCoach: null as Coach | null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach ? this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName : '';
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    areas() {
      return this.selectedCoach ? this.selectedCoach.areas : '';
    },
    rate() {
      return this.selectedCoach ? this.selectedCoach.hourlyRate : 0;
    },
    description() {
      return this.selectedCoach ? this.selectedCoach.description : '';
    },
  },
  created() {
    const coachesGetter = this.$store.getters['coaches/coaches'] as Coach[];
    const foundCoach = coachesGetter.find((coach) => coach.id === this.id);
    this.selectedCoach = foundCoach ? foundCoach : null;
    console.log(this.selectedCoach);
  },
});
</script>
