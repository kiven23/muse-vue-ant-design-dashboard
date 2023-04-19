<template>
	
	<!-- Layout Footer -->
	<a-layout-footer>
		<a-row type="flex">
			<a-col :span="24" :md="12">

				<!-- Footer Copyright Notice -->
				<p class="copyright">
					Copyright © 2023 Portal
			by <a href="https://github.com/kiven23">Stevefox_Linux</a>.
				</p>
				<!-- / Footer Copyright Notice -->

			</a-col>
			<a-col :span="24" :md="12" class="footer-control">

				<!-- Footer Navigation Menu -->
				<a-menu mode="horizontal">
					<a-menu-item>LinuxWalker</a-menu-item>
					<a-menu-item>About Us</a-menu-item>
					<a-menu-item>Blog</a-menu-item>
					<a-menu-item>License</a-menu-item>
				</a-menu>
				<!-- / Footer Navigation Menu -->

			</a-col>
		</a-row>
	</a-layout-footer>
	<!-- / Layout Footer -->

</template>

<script>

	export default ({
		data() {
			return {
			}
		},
	})

</script>
