export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'ReFreshly',
	description: 'Save meals, cut waste, and enjoy great food at lower prices.',
	navItems: [
		{
			label: 'Home',
			href: '/',
		},
	],
	navMenuItems: [
		{
			label: 'Profile',
			href: '/profile',
		},
		{
			label: 'Dashboard',
			href: '/dashboard',
		},
		{
			label: 'Projects',
			href: '/projects',
		},
		{
			label: 'Team',
			href: '/team',
		},
		{
			label: 'Calendar',
			href: '/calendar',
		},
		{
			label: 'Settings',
			href: '/settings',
		},
		{
			label: 'Help & Feedback',
			href: '/help-feedback',
		},
		{
			label: 'Logout',
			href: '/logout',
		},
	],
	links: {
		github: 'https://github.com/heroui-inc/heroui',
		twitter: 'https://twitter.com/hero_ui',
		app: '', //Add link to the app here
		discord: 'https://discord.gg/9b6yyZKmH4',
		sponsor: 'https://patreon.com/jrgarciadev',
	},
};
