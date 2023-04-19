<template>

	<!-- Profile Information Card -->
	<a-card :bordered="false" class="header-solid h-full card-profile-information" :bodyStyle="{paddingTop: 0, paddingBottom: '16px' }" :headStyle="{paddingRight: 0,}">
		<template #title>
			<h6 class="font-semibold m-0">Profile Information</h6>
		</template>
		<a-button type="link" slot="extra">
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path class="fill-muted" d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z" fill="#111827"/>
				<path class="fill-muted" d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z" fill="#111827"/>
			</svg>
		</a-button>
		<p class="text-dark">
			{{data[0].about}}
		</p>
		<hr class="my-25">
		<a-descriptions title="Oliver Liam" :column="1">
			<a-descriptions-item label="Full Name">
				{{data[0].fullname}}
			</a-descriptions-item>
			<a-descriptions-item label="Mobile">
				{{data[0].mobile}}
			</a-descriptions-item>
			<a-descriptions-item label="Email">
				{{data[0].email}}
			</a-descriptions-item>
			<a-descriptions-item label="Branch">
				{{data[0].branch}}
			</a-descriptions-item>
			<a-descriptions-item label="Social" >
				<span v-for="social in data[0].social" :key="social.href">
				<a :href="social.link" class="mx-5 px-5">
					<a-icon :type="social.icon" style="color: #3EA1EC;" />
				</a>
			</span>
			</a-descriptions-item>
			<a-descriptions-item label="Age">
				{{data[0].age}}
			</a-descriptions-item>
			<a-descriptions-item label="Job Title">
				{{data[0].jobtitle}}
			</a-descriptions-item>
			<a-descriptions-item label="Address">
				{{data[0].address}}
			</a-descriptions-item>
		 
		</a-descriptions>
	</a-card>
	
	<!-- / Profile Information Card -->

</template>

<script>

	export default ({ 
		props: {
			data: {
				 
			},
		},
		data() {
			return {
				profileinfo
			}
		},
	})

</script>