<template>
    <div class="loading" @touchmove.prevent='1'>
        <div class="backg"></div>
        <div class="loader loader-4"></div>
    </div>
</template>

<script>
export default {
    name: 'loading',
}
</script>

<style  lang="scss" scoped="" type="text/css">
	.loading{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 1000;
		.backg{
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background: rgba(0,0,0,0.7);
		}
		.fadein{
			opacity: 1;
		}
		.loader-4 {
			position: absolute;
			width: 60px;
			height: 60px;
			left: 50%;
			top: 50%;
			margin: -30px 0 0 -30px;
			border-radius: 50%;
			display: inline-block;
			vertical-align: middle;
			border: 7px double #00a0fe;
			-webkit-animation: ball-turn 1s linear infinite;
			animation: ball-turn 1s linear infinite; }
			.loader-4:before,  .loader-4:after { content: ""; position: absolute; width: 12px; height: 12px; background: #fff000; border-radius: 50%; bottom: 0; right: 37px; }
			.loader-4:after { left: 37px; top: 0; }
	}
	@-webkit-keyframes ball-turn {
	    0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
	    }
	    100% {
	        -webkit-transform: rotate(360deg);
	        transform: rotate(360deg);
	    }
	}
	@keyframes ball-turn {
	    0%{
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
	    }
	    100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
		}
	}
	.loading-enter-active {
	    transition: all 0.4s ease;
	}
	.loading-leave-active {
	    transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.loading-enter, .loading-leave-to{
		opacity: 0;
	}

</style>
