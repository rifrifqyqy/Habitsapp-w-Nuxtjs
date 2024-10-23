<template>
  <div class="mx-auto max-w-2xl p-6">
    <h1 class="mb-8 text-center text-4xl font-bold">Habit Tracker</h1>
    <HabitForm />
    <HabitList />
  </div>
</template>

<script setup>
import { useHabitStore } from "~/stores/habit";

// component imports
import HabitForm from "~/components/HabitForm.vue";
import HabitList from "~/components/HabitList.vue";

const habitStore = useHabitStore();
console.log(habitStore.habits);
</script>

<style>
body {
  background: #f1f1f1;
}
</style>
