<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of the brands I have worked with',
			clients: [
				{
					id: 1,
					title: 'LS3D',
					img: 'https://res.cloudinary.com/sthanial2002/image/upload/v1657174196/sthanial/brands/ls3d_n6ns13.webp',
				},
				{
					id: 2,
					title: 'INRIS FORMATION',
					img: 'https://res.cloudinary.com/sthanial2002/image/upload/v1686702898/sthanial/brands/logo_inris_nc5byq.png',
				},
				{
					id: 3,
					title: 'EDITIONS BENEFCLUB',
					img: 'https://res.cloudinary.com/sthanial2002/image/upload/v1657174508/sthanial/brands/hbeditions_lny2t8.png',
				},
				{
					id: 4,
					title: 'CAURIS',
					img: 'https://res.cloudinary.com/sthanial2002/image/upload/v1686702901/sthanial/brands/cauriz_xggfdb.png',
				},
				{
					id: 5,
					title: 'SEDJRO CONSULTING',
					img: 'https://res.cloudinary.com/sthanial2002/image/upload/v1686702905/sthanial/brands/sedjro_r2m0eb.png',
				},
				{
					id: 6,
					title: 'POUSS POUSS PANIER',
					img: 'https://res.cloudinary.com/sthanial2002/image/upload/v1657174655/sthanial/brands/pousspousspanier_s6dee7.jpg',
				},
				{
					id: 8,
					title: 'MY PLACE EVENTS',
					img: 'https://res.cloudinary.com/sthanial2002/image/upload/v1686703594/sthanial/brands/myplaceevents_cd9a2n_fiv3rs.png',
				},
				{
					id: 9,
					title: 'DATA SOFT',
					img: 'https://res.cloudinary.com/sthanial2002/image/upload/v1686703593/sthanial/brands/datasoft_qpmwi8_nngjqh.png',
				},

			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
			style="color:#fff"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2" >
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
				style="background-color:#fff"
			/>
		</div>
	</div>
</template>
