<script>
export default {
	props: ['project'],
};
</script>

<template>
	<div
		class="rounded-xl shadow-lg hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project"
		style="background-color:#1e3851"
	>
		<div>
			<img
				:src="project.img"
				:alt="project.title"
				class="rounded-t-xl border-none"
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
				style="color:#fff"
			>
				{{ project.title }}
			</p>
			<span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light" style="font-size:.8rem;color:#fff"
				>{{ project.category }}</span> <br>
			<span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light" style="font-size:.8rem;color:#fff"
				>{{ project.tag }}</span> <br>
			<a
				:href="project.url"
				target="__blank"
				class="hover:underline cursor-pointer"
				style="color:#6c63ff"
			>{{ project.url }}</a>
			
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
