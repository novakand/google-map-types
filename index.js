
// Type definitions for Google Maps JavaScript API 3.30
/*
The MIT License
Copyright (c) 2012 Folia A/S. http://www.folia.dk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

declare namespace google.maps {
    export class Map extends MVCObject {
        constructor(mapDiv: Element | null, opts?: MapOptions);
        fitBounds(
            bounds: LatLngBounds | LatLngBoundsLiteral,
            padding?: number | Padding): void;
        getBounds(): LatLngBounds | null | undefined;
        getCenter(): LatLng;
        getDiv(): Element;
        getHeading(): number;
        getMapTypeId(): MapTypeId | string;
        getProjection(): Projection;
        getStreetView(): StreetViewPanorama;
        getTilt(): number;
        getZoom(): number;
        panBy(x: number, y: number): void;
        panTo(latLng: LatLng | LatLngLiteral): void;
        panToBounds(
            latLngBounds: LatLngBounds | LatLngBoundsLiteral,
            padding?: number | Padding): void;
        setCenter(latlng: LatLng | LatLngLiteral): void;
        setHeading(heading: number): void;
        setMapTypeId(mapTypeId: MapTypeId | string): void;
        setOptions(options: MapOptions): void;
        setStreetView(panorama: StreetViewPanorama): void;
        setTilt(tilt: number): void;
        setZoom(zoom: number): void;
        controls: MVCArray<Node>[];
        data: Data;
        mapTypes: MapTypeRegistry;
        overlayMapTypes: MVCArray<MapType>;
        setClickableIcons(clickable: boolean): void;
    }

    export interface Padding {
        bottom: number;
        left: number;
        right: number;
        top: number;
    }

    export interface MapOptions {
        backgroundColor?: string;
        center?: LatLng | LatLngLiteral;
        clickableIcons?: boolean
        disableDefaultUI?: boolean;
        disableDoubleClickZoom?: boolean;
        draggable?: boolean;
        draggableCursor?: string;
        draggingCursor?: string;
        fullscreenControl?: boolean;
        fullscreenControlOptions?: FullscreenControlOptions;
        gestureHandling?: GestureHandlingOptions;
        heading?: number;
        keyboardShortcuts?: boolean;
        mapTypeControl?: boolean;
        mapTypeControlOptions?: MapTypeControlOptions;
        mapTypeId?: MapTypeId;
        maxZoom?: number;
        minZoom?: number;
        noClear?: boolean;
        overviewMapControl?: boolean;
        overviewMapControlOptions?: OverviewMapControlOptions;
        panControl?: boolean;
        panControlOptions?: PanControlOptions;
        rotateControl?: boolean;
        rotateControlOptions?: RotateControlOptions;
        scaleControl?: boolean;
        scaleControlOptions?: ScaleControlOptions;
        scrollwheel?: boolean;
        signInControl?: boolean;
        streetView?: StreetViewPanorama;
        streetViewControl?: boolean;
        streetViewControlOptions?: StreetViewControlOptions;
        styles?: MapTypeStyle[];
        tilt?: number;
        zoom?: number;
        zoomControl?: boolean;
        zoomControlOptions?: ZoomControlOptions;
    }

    export enum MapTypeId {
        HYBRID,
        ROADMAP,
        SATELLITE,
        TERRAIN
    }

    export interface MapTypeControlOptions {
        mapTypeIds?: (MapTypeId | string)[];
        position?: ControlPosition;
        style?: MapTypeControlStyle;
    }

    export enum MapTypeControlStyle { DEFAULT, DROPDOWN_MENU, HORIZONTAL_BAR }

    export interface OverviewMapControlOptions {
        opened?: boolean;
    }

    export type GestureHandlingOptions = 'cooperative' | 'greedy' | 'none' | 'auto';
    export interface PanControlOptions {
        position?: ControlPosition;
    }

    export interface RotateControlOptions {
        position?: ControlPosition;
    }

    export interface ScaleControlOptions {
        style?: ScaleControlStyle;
    }

    export enum ScaleControlStyle { DEFAULT }

    export interface StreetViewControlOptions {
        position?: ControlPosition;
    }

    export interface ZoomControlOptions {
        position?: ControlPosition;
        style?: ZoomControlStyle;
    }

    export enum ZoomControlStyle { DEFAULT, LARGE, SMALL }

    export enum ControlPosition {
        BOTTOM_CENTER,
        BOTTOM_LEFT,
        BOTTOM_RIGHT,
        LEFT_BOTTOM,
        LEFT_CENTER,
        LEFT_TOP,
        RIGHT_BOTTOM,
        RIGHT_CENTER,
        RIGHT_TOP,
        TOP_CENTER,
        TOP_LEFT,
        TOP_RIGHT
    }

    type DrawingMode = 'Point' | 'LineString' | 'Polygon';

    /***** Data *****/
    export class Data extends MVCObject {
        constructor(options?: Data.DataOptions);
        add(feature: Data.Feature | Data.FeatureOptions): Data.Feature;
        addGeoJson(geoJson: Object, options?: Data.GeoJsonOptions): Data.Feature[];
        contains(feature: Data.Feature): boolean;
        forEach(callback: (feature: Data.Feature) => void): void;
        getControlPosition(): ControlPosition;
        getControls(): DrawingMode[];
        getDrawingMode(): DrawingMode | null;
        getFeatureById(id: number | string): Data.Feature;
        getMap(): Map;
        getStyle(): Data.StylingFunction | Data.StyleOptions;
        loadGeoJson(
            url: string, options?: Data.GeoJsonOptions,
            callback?: (features: Data.Feature[]) => void): void;
        overrideStyle(feature: Data.Feature, style: Data.StyleOptions): void;
        remove(feature: Data.Feature): void;
        revertStyle(feature?: Data.Feature): void;
        setControlPosition(controlPosition: ControlPosition): void;
        setControls(controls: DrawingMode[] | null): void;
        setDrawingMode(drawingMode: DrawingMode | null): void;
        setMap(map: Map | null): void;
        setStyle(style: Data.StylingFunction | Data.StyleOptions): void;
        toGeoJson(callback: (feature: Object) => void): void;
    }

    export module Data {
        export interface DataOptions {
            controlPosition?: ControlPosition;
            controls?: DrawingMode[] | null;
            drawingMode?: DrawingMode | null;
            featureFactory?: (geometry: Data.Geometry) => Data.Feature;
            map?: Map;
            style?: Data.StylingFunction | Data.StyleOptions;
        }

        export interface GeoJsonOptions {
            idPropertyName?: string;
        }

        export interface StyleOptions {
            clickable?: boolean;
            cursor?: string;
            draggable?: boolean;
            editable?: boolean;
            fillColor?: string;
            fillOpacity?: number;
            icon?: string | Icon | Symbol;
            shape?: MarkerShape;
            strokeColor?: string;
            strokeOpacity?: number;
            strokeWeight?: number;
            title?: string;
            visible?: boolean;
            zIndex?: number;
        }

        export type StylingFunction = (feature: Data.Feature) => Data.StyleOptions;

        export class Feature {
            constructor(options?: Data.FeatureOptions);
            forEachProperty(callback: (value: any, name: string) => void): void;
            getGeometry(): Data.Geometry;
            getId(): number | string;
            getProperty(name: string): any;
            removeProperty(name: string): void;
            setGeometry(newGeometry: Data.Geometry | LatLng | LatLngLiteral): void;
            setProperty(name: string, newValue: any): void;
            toGeoJson(callback: (feature: Object) => void): void;
        }

        export interface FeatureOptions {
            geometry?: Data.Geometry | LatLng | LatLngLiteral;
            id?: number | string;
            properties?: Object;
        }

        export class Geometry {
            getType(): string;
            forEachLatLng(callback: (latLng: LatLng) => void): void;
        }

        export class Point extends Data.Geometry {
            constructor(latLng: LatLng | LatLngLiteral);
            get(): LatLng;
        }

        export class MultiPoint extends Data.Geometry {
            constructor(elements: (LatLng | LatLngLiteral)[]);
            getArray(): LatLng[];
            getAt(n: number): LatLng;
            getLength(): number;
        }

        export class LineString extends Data.Geometry {
            constructor(elements: (LatLng | LatLngLiteral)[]);
            getArray(): LatLng[];
            getAt(n: number): LatLng;
            getLength(): number;
        }

        export class MultiLineString extends Data.Geometry {
            constructor(elements: (Data.LineString | (LatLng | LatLngLiteral)[])[]);
            getArray(): Data.LineString[];
            getAt(n: number): Data.LineString;
            getLength(): number;
        }

        export class LinearRing extends Data.Geometry {
            constructor(elements: (LatLng | LatLngLiteral)[]);
            getArray(): LatLng[];
            getAt(n: number): LatLng;
            getLength(): number;
        }

        export class Polygon extends Data.Geometry {
            constructor(elements: (Data.LinearRing | (LatLng | LatLngLiteral)[])[]);
            getArray(): Data.LinearRing[];
            getAt(n: number): Data.LinearRing;
            getLength(): number;
        }

        export class MultiPolygon extends Data.Geometry {
            constructor(elements: (Data.Polygon |
                (LinearRing | (LatLng | LatLngLiteral)[])[])[]);
            getArray(): Data.Polygon[];
            getAt(n: number): Data.Polygon;
            getLength(): number;
        }

        export class GeometryCollection extends Data.Geometry {
            constructor(elements: (Data.Geometry[] | LatLng[] | LatLngLiteral)[]);
            getArray(): Data.Geometry[];
            getAt(n: number): Data.Geometry;
            getLength(): number;
        }

        export interface MouseEvent extends google.maps.MouseEvent {
            feature: Data.Feature;
        }

        export interface AddFeatureEvent {
            feature: Data.Feature;
        }

        export interface RemoveFeatureEvent {
            feature: Data.Feature;
        }

        export interface SetGeometryEvent {
            feature: Data.Feature;
            newGeometry: Data.Geometry;
            oldGeometry: Data.Geometry;
        }

        export interface SetPropertyEvent {
            feature: Data.Feature;
            name: string;
            newValue: any;
            oldValue: any;
        }

        export interface RemovePropertyEvent {
            feature: Data.Feature;
            name: string;
            oldValue: any;
        }
    }

    /***** Overlays *****/
    export class Marker extends MVCObject {
        static MAX_ZINDEX: number;
        constructor(opts?: MarkerOptions);
        getAnimation(): Animation;
        getAttribution(): Attribution;
        getClickable(): boolean;
        getCursor(): string;
        getDraggable(): boolean;
        getIcon(): string | Icon | Symbol;
        getLabel(): MarkerLabel;
        getMap(): Map | StreetViewPanorama;
        getOpacity(): number;
        getPlace(): Place;
        getPosition(): LatLng;
        getShape(): MarkerShape;
        getTitle(): string;
        getVisible(): boolean;
        getZIndex(): number;
        setAnimation(animation: Animation | null): void;
        setAttribution(attribution: Attribution): void;
        setClickable(flag: boolean): void;
        setCursor(cursor: string): void;
        setDraggable(flag: boolean): void;
        setIcon(icon: string | Icon | Symbol): void;
        setLabel(label: string | MarkerLabel): void;
        setMap(map: Map | StreetViewPanorama | null): void;
        setOpacity(opacity: number): void;
        setOptions(options: MarkerOptions): void;
        setPlace(place: Place): void;
        setPosition(latlng: LatLng | LatLngLiteral): void;
        setShape(shape: MarkerShape): void;
        setTitle(title: string): void;
        setVisible(visible: boolean): void;
        setZIndex(zIndex: number): void;
    }

    export interface MarkerOptions {
        anchorPoint?: Point;
        animation?: Animation;
        clickable?: boolean;
        cursor?: string;
        draggable?: boolean;
        icon?: string | Icon | Symbol;
        label?: string | MarkerLabel;
        map?: Map | StreetViewPanorama;
        opacity?: number;
        optimized?: boolean;
        place?: Place;
        position: LatLng | LatLngLiteral;
        shape?: MarkerShape;
        title?: string;
        visible?: boolean;
        zIndex?: number;
    }

    export interface Icon {
        anchor?: Point;
        labelOrigin?: Point;
        origin?: Point;
        scaledSize?: Size;
        size?: Size;
        url?: string;
    }

    export interface MarkerLabel {
        color?: string;
        fontFamily?: string;
        fontSize?: string;
        fontWeight?: string;
        text?: string;
    }

    export interface MarkerShape {
        coords?: number[];
        type?: string;
    }

    export interface Symbol {
        anchor?: Point;
        fillColor?: string;
        fillOpacity?: number;
        path?: SymbolPath | string;
        rotation?: number;
        scale?: number;
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
    }

    export enum SymbolPath {
        BACKWARD_CLOSED_ARROW,
        BACKWARD_OPEN_ARROW,
        CIRCLE,
        FORWARD_CLOSED_ARROW,
        FORWARD_OPEN_ARROW
    }

    export enum Animation { BOUNCE, DROP }

    export class InfoWindow extends MVCObject {
        constructor(opts?: InfoWindowOptions);
        close(): void;
        getContent(): string | Element;
        getPosition(): LatLng;
        getZIndex(): number;
        open(map?: Map | StreetViewPanorama, anchor?: MVCObject): void;
        setContent(content: string | Node): void;
        setOptions(options: InfoWindowOptions): void;
        setPosition(position: LatLng | LatLngLiteral): void;
        setZIndex(zIndex: number): void;
    }

    export interface InfoWindowOptions {
        content?: string | Node;
        disableAutoPan?: boolean;
        maxWidth?: number;
        pixelOffset?: Size;
        position?: LatLng | LatLngLiteral;
        zIndex?: number;
    }

    export class Polyline extends MVCObject {
        constructor(opts?: PolylineOptions);
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        getPath(): MVCArray<LatLng>;
        getVisible(): boolean;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map | null): void;
        setOptions(options: PolylineOptions): void;
        setPath(path: MVCArray<LatLng> | LatLng[] | LatLngLiteral[]): void;
        setVisible(visible: boolean): void;
    }

    export interface PolylineOptions {
        clickable?: boolean;
        draggable?: boolean;
        editable?: boolean;
        geodesic?: boolean;
        icons?: IconSequence[];
        map?: Map;
        path?: MVCArray<LatLng> | LatLng[] | LatLngLiteral[];
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
        visible?: boolean;
        zIndex?: number;
    }

    export interface IconSequence {
        fixedRotation?: boolean;
        icon?: Symbol;
        offset?: string;
        repeat?: string;
    }

    export class Polygon extends MVCObject {
        constructor(opts?: PolygonOptions);
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        getPath(): MVCArray<LatLng>;
        getPaths(): MVCArray<MVCArray<LatLng>>;
        getVisible(): boolean;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map | null): void;
        setOptions(options: PolygonOptions): void;
        setPath(path: MVCArray<LatLng> | LatLng[] | LatLngLiteral[]): void;
        setPaths(paths: MVCArray<MVCArray<LatLng>> | MVCArray<LatLng> | LatLng[][] |
            LatLngLiteral[][] | LatLng[] | LatLngLiteral[]): void;
        setVisible(visible: boolean): void;
    }

    export interface PolygonOptions {
        clickable?: boolean;
        draggable?: boolean;
        editable?: boolean;
        fillColor?: string;
        fillOpacity?: number;
        geodesic?: boolean;
        map?: Map;
        paths?: MVCArray<MVCArray<LatLng>> | MVCArray<LatLng> | LatLng[][] |
        LatLngLiteral[][] | LatLng[] | LatLngLiteral[];
        strokeColor?: string;
        strokeOpacity?: number;
        strokePosition?: StrokePosition;
        strokeWeight?: number;
        visible?: boolean;
        zIndex?: number;
    }

    export interface PolyMouseEvent extends MouseEvent {
        edge?: number;
        path?: number;
        vertex?: number;
    }

    export class Rectangle extends MVCObject {
        constructor(opts?: RectangleOptions);
        getBounds(): LatLngBounds;
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        getVisible(): boolean;
        setBounds(bounds: LatLngBounds | LatLngBoundsLiteral): void;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map | null): void;
        setOptions(options: RectangleOptions): void;
        setVisible(visible: boolean): void;
    }

    export interface RectangleOptions {
        bounds?: LatLngBounds | LatLngBoundsLiteral;
        clickable?: boolean;
        draggable?: boolean;
        editable?: boolean;
        fillColor?: string;
        fillOpacity?: number;
        map?: Map;
        strokeColor?: string;
        strokeOpacity?: number;
        strokePosition?: StrokePosition;
        strokeWeight?: number;
        visible?: boolean;
        zIndex?: number;
    }

    export class Circle extends MVCObject {
        constructor(opts?: CircleOptions);
        getBounds(): LatLngBounds;
        getCenter(): LatLng;
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        getRadius(): number;
        getVisible(): boolean;
        setCenter(center: LatLng | LatLngLiteral): void;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map | null): void;
        setOptions(options: CircleOptions): void;
        setRadius(radius: number): void;
        setVisible(visible: boolean): void;
    }

    export interface CircleOptions {
        center?: LatLng | LatLngLiteral;
        clickable?: boolean;
        draggable?: boolean;
        editable?: boolean;
        fillColor?: string;
        fillOpacity?: number;
        map?: Map;
        radius?: number;
        strokeColor?: string;
        strokeOpacity?: number;
        strokePosition?: StrokePosition;
        strokeWeight?: number;
        visible?: boolean;
        zIndex?: number;
    }

    export interface CircleLiteral extends CircleOptions {
        center?: LatLng | LatLngLiteral;
        radius?: number;
    }

    export enum StrokePosition {
        CENTER,
        INSIDE,
        OUTSIDE
    }

    export class GroundOverlay extends MVCObject {
        constructor(
            url: string, bounds: LatLngBounds | LatLngBoundsLiteral,
            opts?: GroundOverlayOptions);
        getBounds(): LatLngBounds;
        getMap(): Map;
        getOpacity(): number;
        getUrl(): string;
        setMap(map: Map | null): void;
        setOpacity(opacity: number): void;
    }

    export interface GroundOverlayOptions {
        clickable?: boolean;
        map?: Map;
        opacity?: number;
    }

    export class OverlayView extends MVCObject {
        draw(): void;
        getMap(): Map | StreetViewPanorama;
        getPanes(): MapPanes;
        getProjection(): MapCanvasProjection;
        onAdd(): void;
        onRemove(): void;
        setMap(map: Map | StreetViewPanorama | null): void;
    }

    export interface MapPanes {
        floatPane: Element;
        floatShadow: Element;
        mapPane: Element;
        markerLayer: Element;
        overlayImage: Element;
        overlayLayer: Element;
        overlayMouseTarget: Element;
        overlayShadow: Element;
    }

    export class MapCanvasProjection extends MVCObject {
        fromContainerPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;
        fromDivPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;
        fromLatLngToContainerPixel(latLng: LatLng): Point;
        fromLatLngToDivPixel(latLng: LatLng): Point;
        getWorldWidth(): number;
    }

    /***** Services *****/
    export class Geocoder {
        geocode(
            request: GeocoderRequest,
            callback: (results: GeocoderResult[], status: GeocoderStatus) => void):
            void;
    }

    export interface GeocoderRequest {
        address?: string;
        bounds?: LatLngBounds | LatLngBoundsLiteral;
        componentRestrictions?: GeocoderComponentRestrictions;
        location?: LatLng | LatLngLiteral;
        placeId?: string;
        region?: string;
    }

    export interface GeocoderComponentRestrictions {
        administrativeArea?: string;
        country?: string | string[];
        locality?: string;
        postalCode?: string;
        route?: string;
    }

    export enum GeocoderStatus {
        ERROR,
        INVALID_REQUEST,
        OK,
        OVER_QUERY_LIMIT,
        REQUEST_DENIED,
        UNKNOWN_ERROR,
        ZERO_RESULTS
    }

    export interface GeocoderResult {
        address_components: GeocoderAddressComponent[];
        formatted_address: string;
        geometry: GeocoderGeometry;
        partial_match: boolean;
        place_id: string;
        postcode_localities: string[];
        types: string[];
    }

    export interface GeocoderAddressComponent {
        long_name: string;
        short_name: string;
        types: string[];
    }

    export interface GeocoderGeometry {
        bounds: LatLngBounds;
        location: LatLng;
        location_type: GeocoderLocationType;
        viewport: LatLngBounds;
    }

    export enum GeocoderLocationType {
        APPROXIMATE,
        GEOMETRIC_CENTER,
        RANGE_INTERPOLATED,
        ROOFTOP
    }

    export class DirectionsRenderer extends MVCObject {
        constructor(opts?: DirectionsRendererOptions);
        getDirections(): DirectionsResult;
        getMap(): Map;
        getPanel(): Element;
        getRouteIndex(): number;
        setDirections(directions: DirectionsResult): void;
        setMap(map: Map | null): void;
        setOptions(options: DirectionsRendererOptions): void;
        setPanel(panel: Element): void;
        setRouteIndex(routeIndex: number): void;
    }

    export interface DirectionsRendererOptions {
        directions?: DirectionsResult;
        draggable?: boolean;
        hideRouteList?: boolean;
        infoWindow?: InfoWindow;
        map?: Map;
        markerOptions?: MarkerOptions;
        panel?: Element;
        polylineOptions?: PolylineOptions;
        preserveViewport?: boolean;
        routeIndex?: number;
        suppressBicyclingLayer?: boolean;
        suppressInfoWindows?: boolean;
        suppressMarkers?: boolean;
        suppressPolylines?: boolean;
    }

    export class DirectionsService {
        route(
            request: DirectionsRequest,
            callback: (result: DirectionsResult, status: DirectionsStatus) => void):
            void;
    }

    export interface DirectionsRequest {
        avoidFerries?: boolean;
        avoidHighways?: boolean;
        avoidTolls?: boolean;
        destination?: string | LatLng | LatLngLiteral | Place;
        durationInTraffic?: boolean;
        drivingOptions?: DrivingOptions;
        optimizeWaypoints?: boolean;
        origin?: string | LatLng | LatLngLiteral | Place;
        provideRouteAlternatives?: boolean;
        region?: string;
        transitOptions?: TransitOptions;
        travelMode?: TravelMode;
        unitSystem?: UnitSystem;
        waypoints?: DirectionsWaypoint[];
    }

    export enum TravelMode { BICYCLING, DRIVING, TRANSIT, WALKING }

    export enum UnitSystem { IMPERIAL, METRIC }

    export interface TransitOptions {
        arrivalTime?: Date;
        departureTime?: Date;
        modes?: TransitMode[];
        routingPreference?: TransitRoutePreference;
    }

    export enum TransitMode { BUS, RAIL, SUBWAY, TRAIN, TRAM }

    export enum TransitRoutePreference { FEWER_TRANSFERS, LESS_WALKING }

    export interface TransitFare { }

    export interface DrivingOptions {
        departureTime: Date;
        trafficModel?: TrafficModel
    }

    export enum TrafficModel { BEST_GUESS, OPTIMISTIC, PESSIMISTIC }
    export interface DirectionsWaypoint {
        location: LatLng | LatLngLiteral | string;
        stopover: boolean;
    }

    export enum DirectionsStatus {
        INVALID_REQUEST,
        MAX_WAYPOINTS_EXCEEDED,
        NOT_FOUND,
        OK,
        OVER_QUERY_LIMIT,
        REQUEST_DENIED,
        UNKNOWN_ERROR,
        ZERO_RESULTS
    }

    export interface DirectionsResult {
        geocoded_waypoints: DirectionsGeocodedWaypoint[];
        routes: DirectionsRoute[];
    }

    export interface DirectionsGeocodedWaypoint {
        partial_match: boolean;
        place_id: string;
        types: string[];
    }

    export interface DirectionsRoute {
        bounds: LatLngBounds;
        copyrights: string;
        fare: TransitFare;
        legs: DirectionsLeg[];
        overview_path: LatLng[];
        overview_polyline: string;
        warnings: string[];
        waypoint_order: number[];
    }

    export interface DirectionsLeg {
        arrival_time: Time;
        departure_time: Time;
        distance: Distance;
        duration: Duration;
        duration_in_traffic: Duration;
        end_address: string;
        end_location: LatLng;
        start_address: string;
        start_location: LatLng;
        steps: DirectionsStep[];
        via_waypoints: LatLng[];
    }

    export interface DirectionsStep {
        distance: Distance;
        duration: Duration;
        end_location: LatLng;
        instructions: string;
        path: LatLng[];
        start_location: LatLng;
        steps: DirectionsStep;
        transit: TransitDetails;
        travel_mode: TravelMode;
    }

    export interface Distance {
        text: string;
        value: number;
    }

    export interface Duration {
        text: string;
        value: number;
    }

    export interface Time {
        text: string;
        time_zone: string;
        value: Date;
    }

    export interface TransitDetails {
        arrival_stop: TransitStop;
        arrival_time: Time;
        departure_stop: TransitStop;
        departure_time: Time;
        headsign: string;
        headway: number;
        line: TransitLine;
        num_stops: number;
    }

    export interface TransitStop {
        location: LatLng;
        name: string;
    }

    export interface TransitLine {
        agencies: TransitAgency[];
        color: string;
        icon: string;
        name: string;
        short_name: string;
        text_color: string;
        url: string;
        vehicle: TransitVehicle;
    }

    export interface TransitAgency {
        name: string;
        phone: string;
        url: string;
    }

    export interface TransitVehicle {
        icon: string;
        local_icon: string;
        name: string;
        type: VehicleType;
    }

    export enum VehicleType {
        BUS,
        CABLE_CAR,
        COMMUTER_TRAIN,
        FERRY,
        FUNICULAR,
        GONDOLA_LIFT,
        HEAVY_RAIL,
        HIGH_SPEED_TRAIN,
        INTERCITY_BUS,
        METRO_RAIL,
        MONORAIL,
        OTHER,
        RAIL,
        SHARE_TAXI,
        SUBWAY,
        TRAM,
        TROLLEYBUS
    }

    export class ElevationService {
        getElevationAlongPath(
            request: PathElevationRequest,
            callback:
                (results: ElevationResult[], status: ElevationStatus) => void):
            void;
        getElevationForLocations(
            request: LocationElevationRequest,
            callback:
                (results: ElevationResult[], status: ElevationStatus) => void):
            void;
    }

    export interface LocationElevationRequest {
        locations: LatLng[];
    }

    export interface PathElevationRequest {
        path?: LatLng[];
        samples?: number;
    }

    export interface ElevationResult {
        elevation: number;
        location: LatLng;
        resolution: number;
    }

    export enum ElevationStatus {
        INVALID_REQUEST,
        OK,
        OVER_QUERY_LIMIT,
        REQUEST_DENIED,
        UNKNOWN_ERROR
    }

    export class MaxZoomService {
        getMaxZoomAtLatLng(
            latlng: LatLng | LatLngLiteral,
            callback: (result: MaxZoomResult) => void): void;
    }

    export interface MaxZoomResult {
        status: MaxZoomStatus;
        zoom: number;
    }

    export enum MaxZoomStatus { ERROR, OK }

    export class DistanceMatrixService {
        getDistanceMatrix(
            request: DistanceMatrixRequest,
            callback:
                (response: DistanceMatrixResponse,
                    status: DistanceMatrixStatus) => void): void;
    }

    export interface DistanceMatrixRequest {
        avoidFerries?: boolean;
        avoidHighways?: boolean;
        avoidTolls?: boolean;
        destinations?: string[] | LatLng[] | LatLngLiteral[] | Place[];
        drivingOptions?: DrivingOptions;
        durationInTraffic?: boolean;
        origins?: string[] | LatLng[] | LatLngLiteral[] | Place[];
        region?: string;
        transitOptions?: TransitOptions;
        travelMode?: TravelMode;
        unitSystem?: UnitSystem;
    }

    export interface DistanceMatrixResponse {
        destinationAddresses: string[];
        originAddresses: string[];
        rows: DistanceMatrixResponseRow[];
    }

    export interface DistanceMatrixResponseRow {
        elements: DistanceMatrixResponseElement[];
    }

    export interface DistanceMatrixResponseElement {
        distance: Distance;
        duration: Duration;
        duration_in_traffic: Duration;
        fare: TransitFare;
        status: DistanceMatrixElementStatus;
    }

    export enum DistanceMatrixStatus {
        INVALID_REQUEST,
        MAX_DIMENSIONS_EXCEEDED,
        MAX_ELEMENTS_EXCEEDED,
        OK,
        OVER_QUERY_LIMIT,
        REQUEST_DENIED,
        UNKNOWN_ERROR
    }

    export enum DistanceMatrixElementStatus { NOT_FOUND, OK, ZERO_RESULTS }

    /***** Save to Google Maps *****/
    export interface Attribution {
        iosDeepLinkId?: string;
        source?: string;
        webUrl?: string;
    }

    export interface Place {
        location?: LatLng | LatLngLiteral;
        placeId?: string;
        query?: string;
    }

    export class SaveWidget {
        constructor(container: Node, opts?: SaveWidgetOptions);
        getAttribution(): Attribution;
        getPlace(): Place;
        setAttribution(attribution: Attribution): void;
        setOptions(opts: SaveWidgetOptions): void;
        setPlace(place: Place): void;
    }

    export interface SaveWidgetOptions {
        attribution?: Attribution;
        place?: Place;
    }

    /***** Map Types *****/
    export interface MapType {
        getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
        releaseTile(tile: Element): void;
        alt?: string;
        maxZoom?: number;
        minZoom?: number;
        name?: string;
        projection?: Projection;
        radius?: number;
        tileSize?: Size;
    }

    export class MapTypeRegistry extends MVCObject {
        constructor();
        set(id: string, mapType: MapType): void;
    }

    export interface Projection {
        fromLatLngToPoint(latLng: LatLng, point?: Point): Point;
        fromPointToLatLng(pixel: Point, noWrap?: boolean): LatLng;
    }

    export class ImageMapType extends MVCObject implements MapType {
        constructor(opts: ImageMapTypeOptions);
        getOpacity(): number;
        getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
        releaseTile(tile: Element): void;
        setOpacity(opacity: number): void;
    }

    export interface ImageMapTypeOptions {
        alt?: string;
        getTileUrl(tileCoord: Point, zoom: number): string;
        maxZoom?: number;
        minZoom?: number;
        name?: string;
        opacity?: number;
        tileSize?: Size;
    }

    export class StyledMapType extends MVCObject implements MapType {
        constructor(styles: MapTypeStyle[], options?: StyledMapTypeOptions);
        getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
        releaseTile(tile: Element): void;
    }

    export interface StyledMapTypeOptions {
        alt?: string;
        maxZoom?: number;
        minZoom?: number;
        name?: string;
    }

    export interface MapTypeStyle {
        elementType?: MapTypeStyleElementType;
        featureType?: MapTypeStyleFeatureType;
        stylers?: MapTypeStyler[];
    }

    export type MapTypeStyleFeatureType =
        'all' | 'administrative' | 'administrative.country' |
        'administrative.land_parcel' | 'administrative.locality' |
        'administrative.neighborhood' | 'administrative.province' | 'landscape' |
        'landscape.man_made' | 'landscape.natural' | 'landscape.natural.landcover' |
        'landscape.natural.terrain' | 'poi' | 'poi.attraction' | 'poi.business' |
        'poi.government' | 'poi.medical' | 'poi.park' | 'poi.place_of_worship' |
        'poi.school' | 'poi.sports_complex' | 'road' | 'road.arterial' | 'road.highway' |
        'road.highway.controlled_access' | 'road.local' | 'transit' | 'transit.line' |
        'transit.station' | 'transit.station.airport' | 'transit.station.bus' |
        'transit.station.rail' | 'water';

    export type MapTypeStyleElementType =
        'all' | 'geometry' | 'geometry.fill' | 'geometry.stroke' | 'labels' | 'labels.icon' |
        'labels.text' | 'labels.text.fill' | 'labels.text.stroke';

    export interface MapTypeStyler {
        color?: string;
        gamma?: number;
        hue?: string;
        invert_lightness?: boolean;
        lightness?: number;
        saturation?: number;
        visibility?: string;
        weight?: number;
    }

    /***** Layers *****/
    export class BicyclingLayer extends MVCObject {
        constructor();
        getMap(): Map;
        setMap(map: Map | null): void;
    }

    export class FusionTablesLayer extends MVCObject {
        constructor(options: FusionTablesLayerOptions);
        getMap(): Map;
        setMap(map: Map | null): void;
        setOptions(options: FusionTablesLayerOptions): void;
    }

    export interface FusionTablesLayerOptions {
        clickable?: boolean;
        heatmap?: FusionTablesHeatmap;
        map?: Map;
        query?: FusionTablesQuery;
        styles?: FusionTablesStyle[];
        suppressInfoWindows?: boolean;
    }

    export interface FusionTablesQuery {
        from?: string;
        limit?: number;
        offset?: number;
        orderBy?: string;
        select?: string;
        where?: string;
    }

    export interface FusionTablesStyle {
        markerOptions?: FusionTablesMarkerOptions;
        polygonOptions?: FusionTablesPolygonOptions;
        polylineOptions?: FusionTablesPolylineOptions;
        where?: string;
    }

    export interface FusionTablesHeatmap {
        enabled: boolean;
    }

    export interface FusionTablesMarkerOptions {
        iconName: string;
    }

    export interface FusionTablesPolygonOptions {
        fillColor?: string;
        fillOpacity?: number;
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
    }

    export interface FusionTablesPolylineOptions {
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
    }

    export interface FusionTablesMouseEvent {
        infoWindowHtml?: string;
        latLng?: LatLng;
        pixelOffset?: Size;
        row?: Object;
    }

    export interface FusionTablesCell {
        columnName?: string;
        value?: string;
    }

    export class KmlLayer extends MVCObject {
        constructor(opts?: KmlLayerOptions);
        getDefaultViewport(): LatLngBounds;
        getMap(): Map;
        getMetadata(): KmlLayerMetadata;
        getStatus(): KmlLayerStatus;
        getUrl(): string;
        getZIndex(): number;
        setMap(map: Map | null): void;
        setUrl(url: string): void;
        setZIndex(zIndex: number): void;
        setOptions(options: KmlLayerOptions): void;
    }

    export interface KmlLayerOptions {
        clickable?: boolean;
        map?: Map;
        preserveViewport?: boolean;
        screenOverlays?: boolean;
        suppressInfoWindows?: boolean;
        url?: string;
        zIndex?: number;
    }

    export interface KmlLayerMetadata {
        author: KmlAuthor;
        description: string;
        hasScreenOverlays: boolean;
        name: string;
        snippet: string;
    }

    export enum KmlLayerStatus {
        DOCUMENT_NOT_FOUND,
        DOCUMENT_TOO_LARGE,
        FETCH_ERROR,
        INVALID_DOCUMENT,
        INVALID_REQUEST,
        LIMITS_EXCEEDED,
        OK,
        TIMED_OUT,
        UNKNOWN
    }

    export interface KmlMouseEvent {
        featureData: KmlFeatureData;
        latLng: LatLng;
        pixelOffset: Size;
    }

    export interface KmlFeatureData {
        author: KmlAuthor;
        description: string;
        id: string;
        infoWindowHtml: string;
        name: string;
        snippet: string;
    }

    export interface KmlAuthor {
        email: string;
        name: string;
        uri: string;
    }

    export class TrafficLayer extends MVCObject {
        constructor(opts?: TrafficLayerOptions);
        getMap(): Map;
        setMap(map: Map | null): void;
        setOptions(options: TrafficLayerOptions): void;
    }

    export interface TrafficLayerOptions {
        autoRefresh?: boolean;
        map?: Map;
    }

    export class TransitLayer extends MVCObject {
        constructor();
        getMap(): void;
        setMap(map: Map | null): void;
    }

    /***** Street View *****/
    export class StreetViewPanorama extends MVCObject {
        constructor(container: Element, opts?: StreetViewPanoramaOptions);
        controls: MVCArray<Node>[];
        getLinks(): StreetViewLink[];
        getLocation(): StreetViewLocation;
        getMotionTracking(): boolean;
        getPano(): string;
        getPhotographerPov(): StreetViewPov;
        getPosition(): LatLng;
        getPov(): StreetViewPov;
        getStatus(): StreetViewStatus;
        getVisible(): boolean;
        getZoom(): number;
        registerPanoProvider(provider: (input: string) => StreetViewPanoramaData):
            void;
        setLinks(links: Array<StreetViewLink>): void;
        setMotionTracking(motionTracking: boolean): void;
        setOptions(options: StreetViewPanoramaOptions): void;
        setPano(pano: string): void;
        setPosition(latLng: LatLng | LatLngLiteral): void;
        setPov(pov: StreetViewPov): void;
        setVisible(flag: boolean): void;
        setZoom(zoom: number): void;
    }

    export interface FullscreenControlOptions {
        position?: ControlPosition;
    }

    export interface StreetViewPanoramaOptions {
        addressControl?: boolean;
        addressControlOptions?: StreetViewAddressControlOptions;
        clickToGo?: boolean;
        disableDefaultUI?: boolean;
        disableDoubleClickZoom?: boolean;
        enableCloseButton?: boolean;
        fullscreenControl?: boolean;
        fullscreenControlOptions?: FullscreenControlOptions;
        imageDateControl?: boolean;
        linksControl?: boolean;
        motionTracking?: boolean;
        motionTrackingControl?: boolean;
        motionTrackingControlOptions?: MotionTrackingControlOptions;
        mode?: 'html4' | 'html5' | 'webgl';
        panControl?: boolean;
        panControlOptions?: PanControlOptions;
        pano?: string;
        panoProvider?: (input: string) => StreetViewPanoramaData;
        position?: LatLng | LatLngLiteral;
        pov?: StreetViewPov;
        scrollwheel?: boolean;
        visible?: boolean;
        zoom?: number;
        zoomControl?: boolean;
        zoomControlOptions?: ZoomControlOptions;
    }

    export interface StreetViewAddressControlOptions {
        position?: ControlPosition;
    }

    export interface StreetViewLink {
        description?: string;
        heading?: number;
        pano?: string;
    }

    export interface StreetViewPov {
        heading?: number;
        pitch?: number;
    }

    export interface StreetViewPanoramaData {
        copyright?: string;
        imageDate?: string;
        links?: StreetViewLink[];
        location?: StreetViewLocation;
        tiles?: StreetViewTileData;
    }

    export interface StreetViewLocation {
        description?: string;
        latLng?: LatLng;
        pano?: string;
        shortDescription?: string;
    }

    export interface StreetViewTileData {
        getTileUrl(pano: string, tileZoom: number, tileX: number, tileY: number):
            string;
        centerHeading?: number;
        tileSize?: Size;
        worldSize?: Size;
    }

    export enum StreetViewPreference { BEST, NEAREST }

    export enum StreetViewSource { DEFAULT, OUTDOOR }

    export interface StreetViewLocationRequest {
        location: LatLng | LatLngLiteral;
        preference?: StreetViewPreference;
        radius?: number;
        source?: StreetViewSource;
    }

    export interface StreetViewPanoRequest {
        pano: string;
    }

    export class StreetViewService {
        getPanorama(
            request: StreetViewLocationRequest | StreetViewPanoRequest,
            cb: (data: StreetViewPanoramaData, status: StreetViewStatus) => void):
            void;
        getPanoramaById(
            pano: string,
            callback:
                (streetViewPanoramaData: StreetViewPanoramaData,
                    streetViewStatus: StreetViewStatus) => void): void;
        getPanoramaByLocation(
            latlng: LatLng | LatLngLiteral, radius: number,
            callback:
                (streetViewPanoramaData: StreetViewPanoramaData,
                    streetViewStatus: StreetViewStatus) => void): void;
    }

    export enum StreetViewStatus { OK, UNKNOWN_ERROR, ZERO_RESULTS }

    export class StreetViewCoverageLayer extends MVCObject {
        getMap(): Map;
        setMap(map: Map | null): void;
    }

    export interface MotionTrackingControlOptions {
        position?: ControlPosition;
    }

    /***** Events *****/
    export interface MapsEventListener {
        remove(): void;
    }

    export class event {
        static addDomListener(
            instance: Object, eventName: string, handler: Function,
            capture?: boolean): MapsEventListener;
        static addDomListenerOnce(
            instance: Object, eventName: string, handler: Function,
            capture?: boolean): MapsEventListener;
        static addListener(instance: Object, eventName: string, handler: Function):
            MapsEventListener;
        static addListenerOnce(
            instance: Object, eventName: string,
            handler: Function): MapsEventListener;
        static clearInstanceListeners(instance: Object): void;
        static clearListeners(instance: Object, eventName: string): void;
        static removeListener(listener: MapsEventListener): void;
        static trigger(instance: any, eventName: string, ...args: any[]): void;
    }

    export interface MouseEvent {
        stop(): void;
        latLng: LatLng;
    }

    export interface IconMouseEvent extends MouseEvent {
        placeId: string;
    }

    export class LatLng {
    
        constructor(lat: number, lng: number, noWrap?: boolean);
        equals(other: LatLng): boolean;
        lat(): number;
        lng(): number;
        toString(): string;
        toUrlValue(precision?: number): string;
        toJSON(): LatLngLiteral;
    }

    export type LatLngLiteral = {
        lat: number; lng: number
    }

    export type LatLngBoundsLiteral = {
        east: number; north: number; south: number; west: number
    }

    export class LatLngBounds {  
        constructor(sw?: LatLng | LatLngLiteral, ne?: LatLng | LatLngLiteral);
        contains(latLng: LatLng | LatLngLiteral): boolean;
        equals(other: LatLngBounds | LatLngBoundsLiteral): boolean;
        extend(point: LatLng | LatLngLiteral): LatLngBounds;
        getCenter(): LatLng;
        getNorthEast(): LatLng;
        getSouthWest(): LatLng;
        intersects(other: LatLngBounds | LatLngBoundsLiteral): boolean;
        isEmpty(): boolean;
        toJSON(): LatLngBoundsLiteral;
        toSpan(): LatLng;
        toString(): string;
        toUrlValue(precision?: number): string;
        union(other: LatLngBounds | LatLngBoundsLiteral): LatLngBounds;
    }

    export class Point {
        constructor(x: number, y: number);
        x: number;
        y: number;
        equals(other: Point): boolean;
        toString(): string;
    }

    export class Size {
        constructor(
            width: number, height: number, widthUnit?: string, heightUnit?: string);
        height: number;
        width: number;
        equals(other: Size): boolean;
        toString(): string;
    }

    export class MVCObject {
        constructor();
        addListener(eventName: string, handler: (...args: any[]) => void):
            MapsEventListener;
        bindTo(
            key: string, target: MVCObject, targetKey?: string,
            noNotify?: boolean): void;
        changed(key: string): void;
        get(key: string): any;
        notify(key: string): void;
        set(key: string, value: any): void;
        setValues(values: any): void;
        unbind(key: string): void;
        unbindAll(): void;
    }

    export class MVCArray<T> extends MVCObject {
        constructor(array?: T[]);
        clear(): void;
        forEach(callback: (elem: T, i: number) => void): void;
        getArray(): T[];
        getAt(i: number): T;
        getLength(): number;
        insertAt(i: number, elem: T): void;
        pop(): T;
        push(elem: T): number;
        removeAt(i: number): T;
        setAt(i: number, elem: T): void;
    }

    /***** Geometry Library *****/
    export module geometry {
        export class encoding {
            static decodePath(encodedPath: string): LatLng[];
            static encodePath(path: LatLng[] | MVCArray<LatLng>): string;
        }

        export class spherical {
            static computeArea(path: LatLng[] | MVCArray<LatLng>, radius?: number):
                number;
            static computeDistanceBetween(from: LatLng, to: LatLng, radius?: number):
                number;
            static computeHeading(from: LatLng, to: LatLng): number;
            static computeLength(path: LatLng[] | MVCArray<LatLng>, radius?: number):
                number;
            
            static computeOffset(
                from: LatLng, distance: number, heading: number,
                radius?: number): LatLng;

            static computeOffsetOrigin(
                to: LatLng, distance: number, heading: number,
                radius?: number): LatLng;
            static computeSignedArea(
                loop: LatLng[] | MVCArray<LatLng>, radius?: number): number;
            static interpolate(from: LatLng, to: LatLng, fraction: number): LatLng;
        }

        export class poly {
            static containsLocation(point: LatLng, polygon: Polygon): boolean;
            static isLocationOnEdge(
                point: LatLng, poly: Polygon | Polyline, tolerance?: number): boolean;
        }
    }

    /***** AdSense Library *****/
    export module adsense {
        export class AdUnit extends MVCObject {
            constructor(container: Element, opts: AdUnitOptions);
            getBackgroundColor(): string;
            getBorderColor(): string;
            getChannelNumber(): string;
            getContainer(): Element;
            getFormat(): AdFormat;
            getMap(): Map;
            getPosition(): ControlPosition;
            getPublisherId(): string;
            getTextColor(): string;
            getTitleColor(): string;
            getUrlColor(): string;
            setBackgroundColor(backgroundColor: string): void;
            setBorderColor(borderColor: string): void;
            setChannelNumber(channelNumber: string): void;
            setFormat(format: AdFormat): void;
            setMap(map: Map | null): void;
            setPosition(position: ControlPosition): void;
            setTextColor(textColor: string): void;
            setTitleColor(titleColor: string): void;
            setUrlColor(urlColor: string): void;
        }

        export interface AdUnitOptions {
            backgroundColor?: string;
            borderColor?: string;
            channelNumber?: string;
            format?: AdFormat;
            map?: Map;
            position?: ControlPosition;
            publisherId?: string;
            textColor?: string;
            titleColor?: string;
            urlColor?: string;
        }

        export enum AdFormat {
            BANNER,
            BUTTON,
            HALF_BANNER,
            LARGE_HORIZONTAL_LINK_UNIT,
            LARGE_RECTANGLE,
            LARGE_VERTICAL_LINK_UNIT,
            LEADERBOARD,
            MEDIUM_RECTANGLE,
            MEDIUM_VERTICAL_LINK_UNIT,
            SKYSCRAPER,
            SMALL_HORIZONTAL_LINK_UNIT,
            SMALL_RECTANGLE,
            SMALL_SQUARE,
            SMALL_VERTICAL_LINK_UNIT,
            SQUARE,
            VERTICAL_BANNER,
            WIDE_SKYSCRAPER,
            X_LARGE_VERTICAL_LINK_UNIT
        }
    }

    /***** Places Library *****/
    export module places {
        export class Autocomplete extends MVCObject {
            constructor(inputField: HTMLInputElement, opts?: AutocompleteOptions);
            getBounds(): LatLngBounds;
            getPlace(): PlaceResult;
            setBounds(bounds: LatLngBounds | LatLngBoundsLiteral): void;
            setComponentRestrictions(restrictions: ComponentRestrictions): void;
            setTypes(types: string[]): void;
        }

        export interface AutocompleteOptions {
            bounds?: LatLngBounds | LatLngBoundsLiteral;
            componentRestrictions?: ComponentRestrictions;
            placeIdOnly?: boolean;
            strictBounds?: boolean;
            types?: string[];
            type?: string;
            fields?: string[];
        }

        export interface AutocompletePrediction {
            description: string;
            matched_substrings: PredictionSubstring[];
            place_id: string;
            reference: string;
            structured_formatting: AutocompleteStructuredFormatting;
            terms: PredictionTerm[];
            types: string[];
        }

        export interface AutocompleteStructuredFormatting {
            main_text: string;
            main_text_matched_substrings: PredictionSubstring[];
            secondary_text: string;
        }

        export interface OpeningHours {
            open_now: boolean;
            periods: OpeningPeriod[];
            weekday_text: string[];
        }

        export interface OpeningPeriod {
            open: OpeningHoursTime;
            close?: OpeningHoursTime;
        }

        export interface OpeningHoursTime {
            day: number;
            hours: number;
            minutes: number;
            nextDate: number;
            time: string;
        }

        export interface PredictionTerm {
            offset: number;
            value: string;
        }

        export interface PredictionSubstring {
            length: number;
            offset: number;
        }

        export class AutocompleteService {
            constructor();
            getPlacePredictions(
                request: AutocompletionRequest,
                callback:
                    (result: AutocompletePrediction[],
                        status: PlacesServiceStatus) => void): void;
            getQueryPredictions(
                request: QueryAutocompletionRequest,
                callback:
                    (result: QueryAutocompletePrediction[],
                        status: PlacesServiceStatus) => void): void;
        }

        export class AutocompleteSessionToken {
            constructor();
        }

        export interface AutocompletionRequest {
            bounds?: LatLngBounds | LatLngBoundsLiteral;
            componentRestrictions?: ComponentRestrictions;
            input: string;
            location?: LatLng;
            offset?: number;
            radius?: number;
            sessionToken?: AutocompleteSessionToken;
            types?: string[];
        }

        export interface ComponentRestrictions {
            country: string | string[];
        }

        export type LocationBias = LatLng | LatLngLiteral | LatLngBounds |
            LatLngBoundsLiteral | Circle | CircleLiteral | string;

        export interface PlaceAspectRating {
            rating: number;
            type: string;
        }

        export interface PlaceDetailsRequest {
            placeId: string;
            fields?: string[];
            sessionToken?: AutocompleteSessionToken;
        }

        export interface PlaceGeometry {
            location: LatLng;
            viewport: LatLngBounds;
        }

        export interface PlacePhoto {
            height: number;
            html_attributions: string[];
            width: number;
            getUrl(opts: PhotoOptions): string;
        }

        export interface PhotoOptions {
            maxHeight?: number;
            maxWidth?: number;
        }

        export interface PlaceResult {
            address_components: GeocoderAddressComponent[];
            adr_address: string;
            aspects: PlaceAspectRating[];
            formatted_address: string;
            formatted_phone_number: string;
            geometry: PlaceGeometry;
            html_attributions: string[];
            icon: string;
            id: string;
            international_phone_number: string;
            name: string;
            opening_hours: OpeningHours;
            permanently_closed: boolean;
            photos: PlacePhoto[];
            place_id: string;
            price_level: number;
            rating: number;
            reviews: PlaceReview[];
            types: string[];
            url: string;
            utc_offset: number;
            vicinity: string;
            website: string;
        }

        export interface PlaceReview {
            aspects: PlaceAspectRating[];
            author_name: string;
            author_url: string;
            language: string;
            text: string;
        }

        export interface PlaceSearchPagination {
            nextPage(): void;
            hasNextPage: boolean;
        }

        export interface PlaceSearchRequest {
            bounds?: LatLngBounds | LatLngBoundsLiteral;
            keyword?: string;
            location?: LatLng | LatLngLiteral;
            maxPriceLevel?: number;
            minPriceLevel?: number;
            name?: string;
            openNow?: boolean;
            radius?: number;
            rankBy?: RankBy;
            types?: string[]; /* Deprecated. Will be removed February 16, 2017 */
            type?: string;
        }

        export class PlacesService {
            constructor(attrContainer: HTMLDivElement | Map);
            findPlaceFromPhoneNumber(
                request: FindPlaceFromPhoneNumberRequest,
                callback:
                    (results: PlaceResult[], status: PlacesServiceStatus) => void):
                void;
            findPlaceFromQuery(
                request: FindPlaceFromQueryRequest,
                callback:
                    (results: PlaceResult[], status: PlacesServiceStatus) => void):
                void;
            getDetails(
                request: PlaceDetailsRequest,
                callback: (result: PlaceResult, status: PlacesServiceStatus) => void):
                void;
            nearbySearch(
                request: PlaceSearchRequest,
                callback:
                    (results: PlaceResult[], status: PlacesServiceStatus,
                        pagination: PlaceSearchPagination) => void): void;
            radarSearch(
                request: RadarSearchRequest,
                callback:
                    (results: PlaceResult[], status: PlacesServiceStatus) => void):
                void;
            textSearch(
                request: TextSearchRequest,
                callback:
                    (results: PlaceResult[], status: PlacesServiceStatus,
                        pagination: PlaceSearchPagination) => void): void;
        }

        export enum PlacesServiceStatus {
            ERROR,
            INVALID_REQUEST,
            OK,
            OVER_QUERY_LIMIT,
            NOT_FOUND,
            REQUEST_DENIED,
            UNKNOWN_ERROR,
            ZERO_RESULTS
        }

        export interface QueryAutocompletePrediction {
            description: string;
            matched_substrings: PredictionSubstring[];
            place_id: string;
            terms: PredictionTerm[];
        }

        export interface QueryAutocompletionRequest {
            bounds?: LatLngBounds | LatLngBoundsLiteral;
            input?: string;
            location?: LatLng;
            offset?: number;
            radius?: number;
        }

        export interface RadarSearchRequest {
            bounds?: LatLngBounds | LatLngBoundsLiteral;
            keyword?: string;
            location?: LatLng | LatLngLiteral;
            name?: string;
            radius?: number;
            types?: string[]; 
            type?: string;
        }

        export enum RankBy { DISTANCE, PROMINENCE }

        export class SearchBox extends MVCObject {
            constructor(inputField: HTMLInputElement, opts?: SearchBoxOptions);
            getBounds(): LatLngBounds;
            getPlaces(): PlaceResult[];
            setBounds(bounds: LatLngBounds | LatLngBoundsLiteral): void;
        }

        export interface SearchBoxOptions {
            bounds: LatLngBounds | LatLngBoundsLiteral;
        }

        export interface TextSearchRequest {
            bounds?: LatLngBounds | LatLngBoundsLiteral;
            location?: LatLng | LatLngLiteral;
            query: string;
            radius?: number;
            types?: string[]; 
            type?: string;
        }

        export interface FindPlaceFromQueryRequest {
            fields: string[];
            locationBias?: LocationBias;
            query: string;
        }

        export interface FindPlaceFromPhoneNumberRequest {
            fields: string[];
            locationBias?: LocationBias;
            phoneNumber: string;
        }
    }

    /***** Drawing Library *****/
    export module drawing {
        export class DrawingManager extends MVCObject {
            constructor(options?: DrawingManagerOptions);
            getDrawingMode(): OverlayType;
            getMap(): Map;
            setDrawingMode(drawingMode: OverlayType | null): void;
            setMap(map: Map | null): void;
            setOptions(options: DrawingManagerOptions): void;
        }

        export interface DrawingManagerOptions {
            circleOptions?: CircleOptions;
            drawingControl?: boolean;
            drawingControlOptions?: DrawingControlOptions;
            drawingMode?: OverlayType | null;
            map?: Map;
            markerOptions?: MarkerOptions;
            polygonOptions?: PolygonOptions;
            polylineOptions?: PolylineOptions;
            rectangleOptions?: RectangleOptions;
        }

        export interface DrawingControlOptions {
            drawingModes?: OverlayType[];
            position?: ControlPosition;
        }

        export interface OverlayCompleteEvent {
            overlay: Marker | Polygon | Polyline | Rectangle | Circle;
            type: OverlayType;
        }

        export enum OverlayType {
            CIRCLE,
            MARKER,
            POLYGON,
            POLYLINE,
            RECTANGLE
        }
    }

    /***** Visualization Library *****/
    export module visualization {
        export class MapsEngineLayer extends MVCObject {
            constructor(options: MapsEngineLayerOptions);
            getLayerId(): string;
            getLayerKey(): string;
            getMap(): Map;
            getMapId(): string;
            getOpacity(): number;
            getProperties(): MapsEngineLayerProperties;
            getStatus(): MapsEngineStatus;
            getZIndex(): number;
            setLayerId(layerId: string): void;
            setLayerKey(layerKey: string): void;
            setMap(map: Map | null): void;
            setMapId(mapId: string): void;
            setOpacity(opacity: number): void;
            setOptions(options: MapsEngineLayerOptions): void;
            setZIndex(zIndex: number): void;
        }

        export interface MapsEngineLayerOptions {
            accessToken?: string;
            clickable?: boolean;
            fitBounds?: boolean;
            layerId?: string;
            layerKey?: string;
            map?: Map;
            mapId?: string;
            opacity?: number;
            suppressInfoWindows?: boolean;
            zIndex?: number;
        }

        export interface MapsEngineLayerProperties {
            name: string;
        }

        export interface MapsEngineMouseEvent {
            featureId?: string;
            infoWindowHtml?: string;
            latLng?: LatLng;
            pixelOffset?: Size;
        }

        export enum MapsEngineStatus { INVALID_LAYER, OK, UNKNOWN_ERROR }

        export class HeatmapLayer extends MVCObject {
            constructor(opts?: HeatmapLayerOptions);
            getData<T extends LatLng | WeightedLocation>(): MVCArray<T>;
            getMap(): Map;
            setData(data: MVCArray<LatLng | WeightedLocation> | LatLng[] |
                WeightedLocation[]): void;
            setMap(map: Map | null): void;
        }

        export interface HeatmapLayerOptions {
            data: any;
            dissipating?: boolean;
            gradient?: string[];
            map?: Map;
            maxIntensity?: number;
            opacity?: number;
            radius?: number;
        }

        export interface WeightedLocation {
            location: LatLng;
            weight: number;
        }

        export class MouseEvent {
            stop(): void;
        }

        export class MapsEventListener { }
    }
}
