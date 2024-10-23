<template>
  <div>
    <ul class="space-y-4">
      <li class="rounded-sm bg-white px-3 py-2">
        <div class="mb-4 flex items-center justify-between">
          <p class="font-bold text-purple-500">Habit Name</p>
          <button class="text-gray-800">Delete</button>
        </div>

        <div class="flex items-center">
          <input type="checkbox" class="mr-2 accent-purple-500" />
          <p class="text-sm text-gray-500">I did this today.</p>
        </div>

        <p class="mt-2 text-sm text-gray-500">Current Streak: 0 days.</p>
      </li>
    </ul>
  </div>
</template>

<script setup></script>
