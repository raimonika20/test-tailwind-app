import {
  Layout,
  Page,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function DiscountPricingPage() {
  return (
    <Page>
      <TitleBar title="Discount page" />
      <Layout>
        <div className="p-4 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">Custom Pricing</h2>
        </div>
      </Layout>
    </Page>
  );
}

