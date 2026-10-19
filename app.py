import streamlit as st

st.set_page_config(page_title="Copper Frequency", layout="wide")

st.title("COPPER FREQUENCY")
st.caption("Frequency · Culture · Resonance")

tab1, tab2, tab3, tab4 = st.tabs(["Men’s Line", "Women’s Line", "Manufacturing", "Kickstarter"])

with tab1:
    st.subheader("Men’s Collection")
    col1, col2, col3 = st.columns(3)
    with col1:
        st.markdown("### Bomber")
        st.write("Classic MA-1 copper bomber with integrated transducers and external frequency plug-in.")
    with col2:
        st.markdown("### Randy Racer")
        st.write("White F1 racing jacket with bold red sleeve stripes and copper circuit system.")
    with col3:
        st.markdown("### Líptė Rähł")
        st.write("Black and red striped racing jacket with full copper frequency integration.")
    col4, col5 = st.columns(2)
    with col4:
        st.markdown("### Trombone")
        st.write("Oliver-inspired black moto jacket with copper transducers and plug-in ports.")
    with col5:
        st.markdown("### T3P0")
        st.write("Dark tactical fusion with copper endoskeleton wiring.")

with tab2:
    st.subheader("Women’s Collection")
    col1, col2, col3 = st.columns(3)
    with col1:
        st.markdown("### Luna")
        st.write("Women’s Randy Racer. Tailored white F1 with red sleeve stripes.")
    with col2:
        st.markdown("### Vesper")
        st.write("Women’s Bomber. Refined copper silhouette.")
    with col3:
        st.markdown("### Aria")
        st.write("Women’s Mountain Monk. Graceful hooded technical copper.")

with tab3:
    st.subheader("Manufacturing")
    st.write("Shared copper frequency platform. Source copper fabric → laser cavities → transducers + wiring → external plug-in → testing. Factories: WESMART, R&B, Shenzhen EMS. Lead time 4–8 weeks.")

with tab4:
    st.subheader("Kickstarter")
    st.write("Prototype hero styles first. Early Bird $199 · Collector $499 · Founder $1,500. Goal covers first MOQ.")

st.divider()
st.caption("Copper Frequency — Conductive copper jackets. Feel the frequency.")
