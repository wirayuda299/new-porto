import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Wirayuda',
		short_name: 'Wirayuda',
		description: 'My Personal website',
		start_url: '/',
		display: 'standalone',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	};
}
