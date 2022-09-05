<script lang="ts">
    let navigate
    let tabs = {
        Funksjon: 'Funksjon',
        EQ: 'EQ',
        SUBMIT: 'SUBMIT',
    }
</script>

<mb-form>
    <sl-tab-group bind:this={navigate}>
        <sl-tab slot="nav" panel="Funksjon">Funksjon</sl-tab>
        <sl-tab slot="nav" panel="EQ">EQ</sl-tab>
        <sl-tab slot="nav" panel="SUBMIT">Sammendrag</sl-tab>

        <sl-tab-panel name="Funksjon">
            <div class="flex flex-col gap-5 shadow-lg rounded-lg border">
                <div class="form-section">
                    <h2>Funksjonsskår</h2>
                    <p>Dette er en registrering av fin opplevde funksjon på registreringstidspunktet</p>
                    <mb-buttons
                    class="grid gap-2 grid-cols-8"
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/a1._smerte"
                        label="1. Smerte"
                        terminology="undefined">
                        
                        <mb-option value="at0009" label="Jeg har ingen smerter for øyeblikket" ordinal="0" />
                        <mb-option value="at0050" label="Smertene er veldig svake for øyblikket" ordinal="1" />
                        <mb-option value="at0051" label="Smertene er moderate for øyeblikket" ordinal="2" />
                        <mb-option value="at0052" label="Smertene er temmelig sterke for øyeblikket" ordinal="3" />
                        <mb-option value="at0098" label="Smertene er veldig sterke for øyeblikket" ordinal="4" />
                        <mb-option value="at0099" label="Smertene er det verst tenkelige for øyeblikket" ordinal="5" />
                    
                    </mb-buttons>

                    <mb-buttons
                        class="grid gap-2 grid-cols-none"
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/a2._personlig_stell"
                        label="2. Personlig stell"
                        terminology="undefined">
                        <mb-option
                            value="at0054"
                            label="Jeg kan stelle meg selv på vanlig måte uten at det forårsaker ekstra smerter"
                            ordinal="0" />
                        <mb-option
                            value="at0055"
                            label="Jeg kan stelle meg selv på vanlig måte, men det er veldig smertefullt"
                            ordinal="1" />
                        <mb-option
                            value="at0056"
                            label="Det er smertefullt å stelle seg selv, og jeg gjør det langsomt og forsiktig"
                            ordinal="2" />
                        <mb-option
                            value="at0057"
                            label="Jeg trenger noe hjelp, men klarer det meste av mitt personlige stell"
                            ordinal="3" />
                        <mb-option
                            value="at0100"
                            label="Jeg trenger hjelp hver dag i de fleste aspekter av egenomsorg"
                            ordinal="4" />
                        <mb-option
                            value="at0101"
                            label="Jeg kler meg ikke, jeg vasker meg med vanskeligheter og blir i sengen"
                            ordinal="5" /></mb-buttons>
                    <mb-buttons
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/a3._å_løfte"
                        label="3. Å løfte"
                        terminology="undefined">
                        <mb-option value="at0059" label="Jeg kan løfte tunge ting uten å få mer smerter" ordinal="0" />
                        <mb-option value="at0060" label="Jeg kan løfte tunge ting, men får smerter" ordinal="1" />
                        <mb-option
                            value="at0061"
                            label="Smerter hindrer meg i å løfte tunge ting opp fra gulvet, men jeg greier det hvis det som skal løftes er gunstig plassert, for eksempel på et bord"
                            ordinal="2" />
                        <mb-option
                            value="at0062"
                            label="Smerter hindrer meg i å løfte tunge ting, men jeg klarer lette og middels tunge ting, hvis det er gunstig plassert"
                            ordinal="3" />
                        <mb-option value="at0102" label="Jeg kan bare løfte veldig lette vekter" ordinal="4" />
                        <mb-option value="at0103" label="Jeg kan ikke løfte eller bære noe" ordinal="5" /></mb-buttons>
                    <mb-buttons
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/a4._å_gå"
                        label="4. Å gå"
                        terminology="undefined">
                        <mb-option value="at0064" label="Smerter hindrer meg ikke i å gå i det hele tatt" ordinal="0" />
                        <mb-option value="at0065" label="Smerter hindrer meg i å gå mer enn 1 1/2 km" ordinal="1" />
                        <mb-option value="at0066" label="Smerter hindrer meg i å gå mer enn 3/4 km" ordinal="2" />
                        <mb-option value="at0067" label="Smerter hindrer meg i å gå mer enn 100 m" ordinal="3" />
                        <mb-option value="at0104" label="Jeg kan bare gå med en stokk eller krykker" ordinal="4" />
                        <mb-option
                            value="at0105"
                            label="Jeg er i sengen mesteparten av tiden"
                            ordinal="5" /></mb-buttons>
                    <mb-buttons
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/a5._å_sitte"
                        label="5. Å sitte"
                        terminology="undefined">
                        <mb-option
                            value="at0069"
                            label="Jeg kan sitte så lenge jeg vil i en hvilken som helst stol"
                            ordinal="0" />
                        <mb-option
                            value="at0070"
                            label="Jeg kan sitte så lenge jeg vil i min favorittstol"
                            ordinal="1" />
                        <mb-option value="at0071" label="Smerter hindrer meg i å sitte mer enn en time" ordinal="2" />
                        <mb-option
                            value="at0072"
                            label="Smerte hindrer meg i å  sitte mer enn en halv time"
                            ordinal="3" />
                        <mb-option
                            value="at0106"
                            label="Smerte hindrer meg i å sitte mer enn ti minutter"
                            ordinal="4" />
                        <mb-option
                            value="at0107"
                            label="Smerter hindrer meg i å sitte i det hele tatt"
                            ordinal="5" /></mb-buttons>
                    <mb-buttons
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/a6._å_stå"
                        label="6. Å stå"
                        terminology="undefined">
                        <mb-option
                            value="at0079"
                            label="Jeg kan stå så lenge jeg vil uten å få mer smerter"
                            ordinal="0" />
                        <mb-option value="at0080" label="Jeg kan stå så lenge jeg vil, men får smerter" ordinal="1" />
                        <mb-option value="at0081" label="Smerter hindrer meg i å stå mer enn en time" ordinal="2" />
                        <mb-option
                            value="at0082"
                            label="Smerter hindrer meg i å stå mer enn en halv time"
                            ordinal="3" />
                        <mb-option
                            value="at0108"
                            label="Smerte hindrer meg i å stå i mer enn ti minutter"
                            ordinal="4" />
                        <mb-option
                            value="at0109"
                            label="Smerter hindrer meg i å stå i det hele tatt"
                            ordinal="5" /></mb-buttons>
                    <mb-buttons
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/a7._å_sove"
                        label="7. Å sove"
                        terminology="undefined">
                        <mb-option value="at0074" label="Søvnen min forstyrres aldri av smerter" ordinal="0" />
                        <mb-option value="at0075" label="Søvnen min forstyrres av og til av smerter" ordinal="1" />
                        <mb-option
                            value="at0076"
                            label="På grunn av smerter får jeg mindre enn seks timers søvn"
                            ordinal="2" />
                        <mb-option
                            value="at0077"
                            label="På grunn av smerter får jeg mindre enn fire timers søvn"
                            ordinal="3" />
                        <mb-option
                            value="at0110"
                            label="På grunn av smerter får jeg mindre enn to timers søvn"
                            ordinal="4" />
                        <mb-option value="at0111" label="Smerter hindrer all søvn" ordinal="5" /></mb-buttons>
                    <mb-buttons
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/a8._seksualliv"
                        label="8. Seksualliv"
                        terminology="undefined">
                        <mb-option
                            value="at0084"
                            label="Seksuallivet mitt er normalt og forårsaker ikke mer smerter"
                            ordinal="0" />
                        <mb-option
                            value="at0085"
                            label="Seksuallivet mitt er normalt, men forårsaker noe mer smerter"
                            ordinal="1" />
                        <mb-option
                            value="at0086"
                            label="Seksuallivet mitt er (nesten) normalt, men svært smertefult"
                            ordinal="2" />
                        <mb-option
                            value="at0087"
                            label="Seksuallivet mitt er svært begrenset på grunn av smerter"
                            ordinal="3" />
                        <mb-option
                            value="at0112"
                            label="Seksuallivet mitt er nesten borte på grunn av smerter"
                            ordinal="4" />
                        <mb-option value="at0113" label="Smerter forhindrer alt seksualliv" ordinal="5" /></mb-buttons>
                    <mb-buttons
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/a9._sosialt_liv_omgang_med_venner_og_kjente"
                        label="9. Sosialt liv (omgang med venner og kjente)"
                        terminology="undefined">
                        <mb-option
                            value="at0089"
                            label="Det sosiale livet mitt er normalt og forårsaker ikke mer smerter"
                            ordinal="0" />
                        <mb-option
                            value="at0090"
                            label="Det sosiale livet mitt er normalt, men øker graden av smerter"
                            ordinal="1" />
                        <mb-option
                            value="at0091"
                            label="Smerter har ingen betydelig innvirkning på mitt sosiale liv, bortsett fra at det begrenser mine fysisk aktive sider, som sport osv."
                            ordinal="2" />
                        <mb-option
                            value="at0092"
                            label="Smerter har begrenset mitt sosiale liv, og jeg går ikke ut så ofte"
                            ordinal="3" />
                        <mb-option
                            value="at0114"
                            label="Smerter har begrenst mitt sosiale liv til hjemmet"
                            ordinal="4" />
                        <mb-option
                            value="at0115"
                            label="På grunn av smerter har jeg ikke noe sosialt liv"
                            ordinal="5" /></mb-buttons>
                    <mb-buttons
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/a10._å_reise"
                        label="10. Å reise"
                        terminology="undefined">
                        <mb-option value="at0094" label="Jeg kan reise hvor som helst uten smerter" ordinal="0" />
                        <mb-option
                            value="at0095"
                            label="Jeg kan reise hvor som helst, men det gir mer smerter"
                            ordinal="1" />
                        <mb-option
                            value="at0096"
                            label="Smertene er ille, men jeg klarer reiser på to timer"
                            ordinal="2" />
                        <mb-option
                            value="at0097"
                            label="Smerter begrenser meg til korte reiser på under en time"
                            ordinal="3" />
                        <mb-option
                            value="at0116"
                            label="Smerter begrenser meg til korte, nødvendige reiser på under 30 minutter"
                            ordinal="4" />
                        <mb-option
                            value="at0117"
                            label="Smerter forhindrer meg fra å reise, unntatt for å få behandling"
                            ordinal="5" /></mb-buttons>
                    <mb-count
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/total_skåring"
                        label="Total skåring" />
                    <mb-proportion
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/total_skåring_som_prosent"
                        label="Total skåring som prosent"
                        min="0"
                        max="100"
                        step="1"
                        type="percent" />
                    <mb-buttons
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/tolkning"
                        label="Tolkning"
                        terminology="undefined">
                        <mb-option value="at0119" label="Minimal funksjonshemming" ordinal="0" />
                        <mb-option value="at0120" label="Moderat funksjonshemming" ordinal="1" />
                        <mb-option value="at0121" label="Alvorlig funksjonshemming" ordinal="2" />
                        <mb-option value="at0122" label="Forkrøpet" ordinal="3" />
                        <mb-option value="at0123" label="Sengeliggede" ordinal="4" />
                    </mb-buttons>
                    <mb-input
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/påvirkende_faktorer:0"
                        label="Påvirkende faktorer" />
                    <mb-context
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/time" />
                    <mb-context
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/language" />
                    <mb-context
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/encoding" />
                    <mb-context
                        path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/funksjonsskår_oswestry/subject" />
                </div>
            </div></sl-tab-panel>
        <sl-tab-panel name="EQ">
            <div class="form-section">
                <h2>EQ</h2>

                <mb-buttons
                    path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/eq-5d-5l_health_status/mobilitet"
                    label="Mobilitet"
                    terminology="undefined">
                    <mb-option value="at0005" label="Ingen problemer" ordinal="1" />
                    <mb-option value="at0012" label="Små problemer" ordinal="2" />
                    <mb-option value="at0013" label="Moderate problemer" ordinal="3" />
                    <mb-option value="at0014" label="Alvorlige problemer" ordinal="4" />
                    <mb-option value="at0015" label="Ute av stand til å gå omkring" ordinal="5" /></mb-buttons>
                <mb-buttons
                    path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/eq-5d-5l_health_status/personlig_stell"
                    label="Personlig stell"
                    terminology="undefined">
                    <mb-option value="at0016" label="Ingen problemer" ordinal="1" />
                    <mb-option value="at0017" label="Små problemer" ordinal="2" />
                    <mb-option value="at0018" label="Moderate problemer" ordinal="3" />
                    <mb-option value="at0019" label="Alvorlige problemer" ordinal="4" />
                    <mb-option
                        value="at0020"
                        label="Ute av stand til å vaske meg eller kle meg"
                        ordinal="5" /></mb-buttons>
                <mb-buttons
                    path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/eq-5d-5l_health_status/vanlige_gjøremål"
                    label="Vanlige gjøremål"
                    terminology="undefined">
                    <mb-option value="at0021" label="Ingen problemer" ordinal="1" />
                    <mb-option value="at0022" label="Små problemer" ordinal="2" />
                    <mb-option value="at0023" label="Moderate problemer" ordinal="3" />
                    <mb-option value="at0024" label="Alvorlige problemer" ordinal="4" />
                    <mb-option
                        value="at0025"
                        label="Ute av stand til å utføre mine vanlige gjøremål"
                        ordinal="5" /></mb-buttons>
                <mb-buttons
                    path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/eq-5d-5l_health_status/smerte_og_ubehag"
                    label="Smerte og ubehag"
                    terminology="undefined">
                    <mb-option value="at0026" label="Hverken smerte eller ubehag" ordinal="1" />
                    <mb-option value="at0027" label="Litt smerte eller ubehag" ordinal="2" />
                    <mb-option value="at0028" label="Middels smerte eller ubehag" ordinal="3" />
                    <mb-option value="at0029" label="Sterke smerter eller ubehag" ordinal="4" />
                    <mb-option value="at0030" label="Svært sterke smerter eller ubehag" ordinal="5" /></mb-buttons>
                <mb-buttons
                    path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/eq-5d-5l_health_status/angst_og_depresjon"
                    label="Angst og depresjon"
                    terminology="undefined">
                    <mb-option value="at0031" label="Hverken engstelig eller deprimert" ordinal="1" />
                    <mb-option value="at0032" label="Litt engstelig eller deprimert" ordinal="2" />
                    <mb-option value="at0033" label="Middels engstelig eller deprimert" ordinal="3" />
                    <mb-option value="at0034" label="Svært engstelig eller deprimert" ordinal="4" />
                    <mb-option value="at0035" label="Ekstremt engstelig eller deprimert" ordinal="5" /></mb-buttons>
                <mb-input
                    path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/eq-5d-5l_health_status/tilstand"
                    label="Tilstand" />
                <mb-count
                    path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/eq-5d-5l_health_status/helsen_din_i_dag"
                    label="Helsen din i dag" />
                <mb-context path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/eq-5d-5l_health_status/time" />
                <mb-context
                    path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/eq-5d-5l_health_status/language" />
                <mb-context
                    path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/eq-5d-5l_health_status/encoding" />
                <mb-context
                    path="spørreskjema_for_pasienter_som_skal_opereres_i_ryggen/eq-5d-5l_health_status/subject" />
            </div>
        </sl-tab-panel>
        <sl-tab-panel name="SUBMIT">
            <div class="form-submit">
                <h1>Lever skjema</h1>
                <mb-submit>
                    <sl-button variant="default">Default</sl-button>
                </mb-submit>
            </div>
        </sl-tab-panel>
    </sl-tab-group>
</mb-form>

<style>
    .form-section {
        width: 100%;
    }

    mb-buttons {
        align-items: center;
    }
</style>
