import { CoachesState } from '@/types/interfaces/coaches';

export default {
  coaches(state: CoachesState) {
    return state.coaches;
  },
  hasCoaches(state: CoachesState) {
    return state.coaches && state.coaches.length > 0;
  },
};
