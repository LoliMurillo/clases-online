import HomePage from "core/pages/HomePage";
import { UserProfilePage } from "user/pages/UserProfilePage";
import { Layout } from "core/components/Layout";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

export const RouterProvider = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="profile" element={<UserProfilePage />} />
			</Routes>
		</Layout>
	);
};
