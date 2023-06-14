<script>
import counter from 'vue3-autocounter';
export default {
	components: {
		counter,
	},
	data: () => {
		return {
			experienceTitle: 'Years of experience',
			githubTitle: 'lines of code',
			feedbackTitle: 'Positive feedback on 5euros.com',
			projectsTitle: 'Projects completed',
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm" style="background-color:#1e3851">
		<!-- About me counters -->
		<div
			class="font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"
			
		>
			<!-- Years of experience counter -->
			<div class="mb-20 sm:mb-0">
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="7"
					:duration="1"
					:autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
					aria-label="About Status Counter"
					style="color:#fff"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					style="color:#fff"
				>
					{{ experienceTitle }}
				</span>
			</div>

			<!-- GitHub stars counter -->
			<div class="mb-20 sm:mb-0">
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="10"
					:duration="1"
					suffix="k+"
					:autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
					style="color:#fff"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					style="color:#fff"
					>{{ githubTitle }}</span
				>
			</div>

			<!-- Positive feedback counter -->
			<div class="mb-20 sm:mb-0">
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="92"
					:duration="1"
					suffix="%"
					:autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
					style="color:#fff"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					style="color:#fff"
				>
					{{ feedbackTitle }}
				</span>
			</div>

			<!-- Projects completed counter -->
			<div class="mb-20 sm:mb-0">
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="35"
					:duration="1"
					:autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
					style="color:#fff"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					style="color:#fff"
				>
					{{ projectsTitle }}
				</span>
			</div>
		</div>
	</div>
</template>
