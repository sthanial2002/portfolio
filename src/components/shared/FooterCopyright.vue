<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Copyright Tous droits réservés',
			author: 'Sthanial2002',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center" >
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
			style="color:#fff"
		>
			&copy; {{ copyrightDate }}.
				{{ projectName }}
			. Developed by
			<a
				href="http://sthanial.herokuapp.com"
				target="__blank"
				class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
				style="color:#fff"
				>{{ author }}</a
			>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
