/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
		  {
			protocol: "https",
			hostname: "cabinet-michou.com",
			
		  },
		],
	  },
	typescript:{
		ignoreBuildErrors: true,
       
	  }
	
};

export default nextConfig;
