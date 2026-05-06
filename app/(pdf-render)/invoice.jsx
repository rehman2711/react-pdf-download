import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer"

const RED = "#e11d2e"
const DARK = "#1f2937"
const LIGHT = "#f5f5f5"

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    backgroundColor: LIGHT,
  },

  // HEADER STRIP
  header: {
    backgroundColor: DARK,
    color: "#fff",
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerRight: {
    backgroundColor: RED,
    padding: 12,
    color: "#fff",
  },

  company: { fontSize: 28, fontWeight: "bold" },

  // INVOICE TITLE
  invoiceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },

  // TOP SECTION
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  box: {
    width: "48%",
  },

  label: {
    color: RED,
    fontSize: 9,
    marginBottom: 3,
  },

  // PRODUCT CARD
  productBox: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  productImage: {
    width: 200,
    height: 230,
    marginRight: 10,
  },

  signature: {
    width: 110,
    height: 130,
    marginRight: 10,
  },

  productInfo: {
    flex: 1,
  },

  productName: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
  },

  productPrice: {
    fontSize: 10,
    fontWeight: "semibold",
    marginTop: 15,
    marginBottom: 15,
  },

  productText: {
    fontSize: 10,
    marginTop: 3,
    marginBottom: 3,
  },

  // TABLE
  table: {
    borderWidth: 1,
    marginTop: 10,
  },

  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  th: {
    backgroundColor: RED,
    color: "#fff",
    fontWeight: "bold",
  },

  cell1: { width: "40%", padding: 6 },
  cell2: { width: "20%", padding: 6, textAlign: "center" },
  cell3: { width: "20%", padding: 6, textAlign: "center" },
  cell4: { width: "20%", padding: 6, textAlign: "right" },

  // TOTAL BOX
  totals: {
    marginTop: 15,
    alignItems: "flex-end",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
  },

  grandTotal: {
    backgroundColor: RED,
    color: "#fff",
    padding: 6,
    marginTop: 5,
    width: 200,
    textAlign: "right",
  },

  // FOOTER
  footer: {
    marginTop: 30,
  },
})

const ShoeInvoicePDF = ({ items }) => {
  const subtotal = items.reduce((a, b) => a + b.price, 0)
  const tax = Math.round(subtotal * 0.1)
  const total = subtotal + tax
  const product = items[0]

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={{ flexDirection: "row" }}>
          <View style={[styles.header, { width: "60%" }]}>
            <Text style={styles.company}>COMMET STORE</Text>
          </View>
          <View style={[styles.headerRight, { width: "40%" }]}>
            <Text>+91 9021100157</Text>
            <Text>support@rehmankalawant.com</Text>
          </View>
        </View>

        {/* TITLE */}
        <Text style={styles.invoiceTitle}>INVOICE</Text>

        {/* INFO SECTION */}
        <View style={styles.sectionRow}>
          <View style={styles.box}>
            <Text style={styles.label}>INVOICE TO</Text>
            <Text style={styles.productText}>Vikesh Dhawan</Text>
            <Text style={styles.productText}>+91 9876543210</Text>
            <Text style={styles.productText}>vikeshdhawan@gmail.com</Text>
            <Text style={styles.productText}>Pune , India</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.productText}>Invoice No: 67RTN07071344</Text>
            <Text style={styles.productText}>
              Purchase Date : {new Date().toLocaleDateString()}
            </Text>
            <Text style={styles.productText}>Payment Method : UPI</Text>
          </View>
        </View>

        {/* TABLE */}
        <View style={styles.table}>
          <View style={[styles.row, styles.th]}>
            <Text style={styles.cell1}>Item</Text>
            <Text style={styles.cell2}>Price</Text>
            <Text style={styles.cell3}>Qty</Text>
            <Text style={styles.cell4}>Total</Text>
          </View>

          {items.map((item, i) => (
            <View key={i} style={styles.row}>
              <Text style={styles.cell1}>{item.name}</Text>
              <Text style={styles.cell2}>Rs. {item.price}/-</Text>
              <Text style={styles.cell3}>1</Text>
              <Text style={styles.cell4}>Rs. {item.price}/-</Text>
            </View>
          ))}
        </View>

        {/* TOTALS */}
        <View style={styles.totals}>
          <View style={styles.totalRow}>
            <Text>Subtotal</Text>
            <Text>Rs. {subtotal}/-</Text>
          </View>
          <View style={styles.totalRow}>
            <Text>Tax (10%)</Text>
            <Text>Rs. {tax}/-</Text>
          </View>

          <Text style={styles.grandTotal}>Total: Rs. {total}/-</Text>
        </View>

        {/* PRODUCT CARD */}
        <View style={styles.productBox}>
          <Image src={product.imageUrl} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.productPrice}>
              Price: Rs. {product.price}/-
            </Text>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text>Thank you for doing business with us.</Text>

          <View style={styles.signature}>
            <Image src="/signature.png" />
            <Text>Authorized Signature</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default ShoeInvoicePDF
